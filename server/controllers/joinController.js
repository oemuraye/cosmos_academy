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
  const normalizedCategory = Object.keys(syllabusMap).find(
    key => key.toLowerCase().trim() === category.toLowerCase().trim()
  );

  const folder = normalize(normalizedCategory || category);
  const syllabusFile = syllabusMap?.[normalizedCategory]?.[level];

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
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ email, category, level });
  if (existingUser) {
    return res.status(400).json({ message: "You have already registered for this course and level." });
  }

  try {
    const mongoUser = new User({ name, email, phone, category, level });
    const savedMongoUser = await mongoUser.save();

    pool.query(
      "SELECT * FROM users WHERE email = ? AND category = ? AND level = ?",
      [email, category, level],
      (err, results) => {
        if (err) {
          console.error("❌ MySQL Select Error:", err);
          return res.status(500).json({ message: "Database error" });
        }

        if (results.length > 0) {
          return res.status(400).json({ message: "You have already registered for this course and level." });
        }

        // ✅ If no duplicate, proceed with insert
        pool.query(
          "INSERT INTO users (name, email, phone, category, level, mongo_id) VALUES (?, ?, ?, ?, ?, ?)",
          [name, email, phone, category, level, savedMongoUser._id.toString()],
          (err, result) => {
            if (err) {
              console.error("❌ MySQL Insert Error:", err);
              return res.status(500).json({ message: "MySQL insert error" });
            }
            console.log("✅ User saved to MySQL", result.insertId);
          }
        );
      }
    );


    // Load email template
    const templatePath = path.join(__dirname, "../emails/joinEmail.html");
    let htmlTemplate = fs.readFileSync(templatePath, "utf-8");
    htmlTemplate = htmlTemplate.replace("{{name}}", name);

    // Get file info
    const { rawPath, publicURL, fileName } = getSyllabusPaths(category, level);

    if (rawPath && fs.existsSync(rawPath)) {
      console.log("✅ Syllabus file found:", rawPath);
      htmlTemplate = htmlTemplate
        .replace("{{syllabus_link}}", `https://server.cosmosconference.org${publicURL}`)
        .replace("{{syllabus_name}}", `${category} (${level})`);
    } else {
      htmlTemplate = htmlTemplate.replace(/<p>Download your course syllabus:.*?<\/p>/, "");
      console.warn("⚠️ Missing or invalid syllabus:", category, level);
    }

    // Send email
    const emailResult = await sendEmail(email, "Welcome to Cosmos Academy", htmlTemplate);

    if (emailResult.success) {
      return res.json({ message: "User registered & email sent successfully" });
    } else {
      return res.status(500).json({ message: "User saved, but email failed" });
    }

  } catch (error) {
    console.error("❌ Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};