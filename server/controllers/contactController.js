import sendEmail from "../utils/sendEmail.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handleContactRequest = async (req, res) => {
  const { fullName, subject, email, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Read the email template
    const templatePath = path.join(__dirname, "../emails/contactEmail.html");
    let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

    // Replace placeholders with actual values
    htmlTemplate = htmlTemplate
      .replace("{{fullName}}", fullName)
      .replace("{{email}}", email)
      .replace("{{subject}}", subject)
      .replace("{{message}}", message);

    // Send email
    const result = await sendEmail("oemuraye@gmail.com", "Contact Request from Cosmos Academy", htmlTemplate);

    if (result.success) {
      res.json({ message: "Email sent successfully" });
    } else {
      res.status(500).json({ message: "Failed to send email" });
    }
  } catch (error) {
    console.error("❌ Contact Form Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};