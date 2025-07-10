import User from "../models/user.js";
import pool from "../config/mysql.js";
import sendEmail from "../utils/sendEmail.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Importing the syllabus map
import { syllabusMap } from "../utils/syllabusMap.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Normalize folder names to snake_case
const normalize = (str) =>
  str.toLowerCase().trim().replace(/\s+/g, "_").replace(/[^\w_]/g, "");

// Generate file paths and URL
const getSyllabusPaths = (category, level) => {
  const normalizedCategoryKey = Object.keys(syllabusMap).find(
    key => key.toLowerCase().trim() === category.toLowerCase().trim()
  );

  const folder = normalize(normalizedCategoryKey || category);
  const syllabusFile = syllabusMap?.[normalizedCategoryKey]?.[level];

  if (!syllabusFile) {
    const rawPath = path.join(__dirname, `../public/docs/${folder}/${level} Syllabus.pdf`);
    console.warn(`⚠️ Syllabus file not found for: ${category} (${level}) → ${rawPath}`);
    return { rawPath: null, publicURL: null, folder, fileName: null };
  }

  const rawPath = path.join(__dirname, `../public/docs/${folder}/${syllabusFile}`);
  const publicURL = `/docs/${folder}/${encodeURIComponent(syllabusFile)}`;
  return { rawPath, publicURL, folder, fileName: syllabusFile };
};


export const handleJoinRequest = async (req, res) => {
  const { name, email, phone, category, level } = req.body;

  if (!name || !email || !phone || !category || !level) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
      error: "Missing one or more required fields: name, email, phone, category, level"
    });
  }

  try {
    const existingUser = await User.findOne({ email, category, level });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "You have already registered for this course and level.",
        error: "Duplicate entry in MongoDB"
      });
    }

    const mongoUser = new User({ name, email, phone, category, level });
    const savedMongoUser = await mongoUser.save();

    pool.query(
      "SELECT * FROM users WHERE email = ? AND category = ? AND level = ?",
      [email, category, level],
      (err, results) => {
        if (err) {
          console.error("❌ MySQL Select Error:", err);
          return res.status(500).json({
            success: false,
            message: "Database error",
            error: err.message
          });
        }

        if (results.length > 0) {
          return res.status(400).json({
            success: false,
            message: "You have already registered for this course and level.",
            error: "Duplicate entry in MySQL"
          });
        }

        // Proceed with insert
        pool.query(
          "INSERT INTO users (name, email, phone, category, level, mongo_id) VALUES (?, ?, ?, ?, ?, ?)",
          [name, email, phone, category, level, savedMongoUser._id.toString()],
          async (err, result) => {
            if (err) {
              console.error("❌ MySQL Insert Error:", err);
              return res.status(500).json({
                success: false,
                message: "Failed to save user to MySQL",
                error: err.message
              });
            }

            // Prepare and send email
            const templatePath = path.join(__dirname, "../emails/joinEmail.html");
            let htmlTemplate = fs.readFileSync(templatePath, "utf-8");
            htmlTemplate = htmlTemplate.replace("{{name}}", name);

            const { rawPath, publicURL } = getSyllabusPaths(category, level);
            if (rawPath && fs.existsSync(rawPath)) {
              htmlTemplate = htmlTemplate
                .replace("{{syllabus_link}}", `https://server.cosmosconference.org${publicURL}`)
                .replace("{{syllabus_name}}", `${category} (${level})`);
            } else {
              htmlTemplate = htmlTemplate.replace(/<p>Download your course syllabus:.*?<\/p>/, "");
            }

            const emailResult = await sendEmail(email, "Welcome to Cosmos Academy", htmlTemplate);
            if (emailResult.success) {
              return res.json({
                success: true,
                message: "User registered & email sent successfully",
                data: { id: savedMongoUser._id }
              });
            } else {
              return res.status(500).json({
                success: false,
                message: "User saved, but email sending failed",
                error: emailResult.error || "Unknown email error"
              });
            }
          }
        );
      }
    );
  } catch (error) {
    console.error("❌ Error:", error);

    // Optional: Customize MongoDB duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "This email has already registered for this course and level.",
        error: error.message,
        details: error.keyValue
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
