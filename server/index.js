import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(cors({ origin: "*", methods: "GET,POST", credentials: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cosmos Academy Server is running");
});

const sendEmail = async (to, subject, htmlContent) => {
  try {
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.your-email-provider.com", // e.g., smtp.gmail.com, smtp.mailtrap.io, smtp.sendgrid.net
    //   port: 587, // Use 465 for SSL or 587 for TLS
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: process.env.SMTP_USER, // Your SMTP email
    //     pass: process.env.SMTP_PASS, // Your SMTP password or API key
    //   },
    // });
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = { 
      from: process.env.AUTH_EMAIL, 
      to, 
      subject, 
      html: htmlContent  // Use 'html' instead of 'text'
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, message: error.message };
  }
};


// ✅ Contact Form Route
app.post("/api/contact", async (req, res) => {
  const { fullName, subject, email, message } = req.body;
  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const templatePath = path.join(__dirname, "emails/contactEmail.html");
  let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

  const result = await sendEmail(
    "oemuraye@gmail.com",
    "Contact Request from Cosmos Academy Website",
    htmlTemplate = htmlTemplate
      .replace("{{fullName}}", fullName)
      .replace("{{email}}", email)
      .replace("{{subject}}", subject)
      .replace("{{message}}", message)
  );

  result.success
    ? res.json({ message: "Email sent successfully" })
    : res.status(500).json({ message: "Failed to send email" });
});

// ✅ Join Us Route
app.post("/api/join", async (req, res) => {
  const { email, phone } = req.body;
  if (!email || !phone) {
    return res.status(400).json({ message: "Email and phone are required" });
  }

  const templatePath = path.join(__dirname, "emails/joinEmail.html");
  let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

  htmlTemplate = htmlTemplate.replace("{{email}}", email).replace("{{phone}}", phone);

  const result = await sendEmail("oemuraye@gmail.com", "New Join Request", htmlTemplate);

  result.success
    ? res.json({ message: "Email sent successfully" })
    : res.status(500).json({ message: "Failed to send email" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
