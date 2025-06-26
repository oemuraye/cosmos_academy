import User from "../models/user.js";
import pool from "../config/mysql.js";
import sendEmail from "../utils/sendEmail.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handleJoinRequest = async (req, res) => {
  const { name, email, phone, category, level } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!phone) {
    return res.status(400).json({ message: "Phone number is required" });
  }
  if (!category) {
    return res.status(400).json({ message: "Category is required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  try {
    const mongoUser = new User({ name, email, phone, category, level,});
    const savedMongoUser = await mongoUser.save();

    const mongoIdString = savedMongoUser._id.toString();

    pool.query(
      "INSERT INTO users (name, email, phone, category, level, mongo_id) VALUES (?, ?, ?, ?, ?, ?)", 
      [name, email, phone, category, level, mongoIdString], 
      (err, result) => {
        if (err) console.error("❌ MySQL Insert Error:", err);
        else console.log("✅ User saved to MySQL", result.insertId);
      }
    );

    // Read email template
    const templatePath = path.join(__dirname, "../emails/joinEmail.html");
    let htmlTemplate = fs.readFileSync(templatePath, "utf-8");
    htmlTemplate = htmlTemplate.replace("{{name}}", name);

    // Send Email
    const emailResult = await sendEmail(email, "Welcome to Cosmos Academy", htmlTemplate);

    if (emailResult.success) {
      res.json({ message: "User registered & email sent successfully" });
    } else {
      res.status(500).json({ message: "User saved, but email failed" });
    }

  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};