import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (to, subject, htmlContent) => {
  try {
    // const transporter = nodemailer.createTransport({
    //     host: "smtp.your-email-provider.com", // e.g., smtp.gmail.com, smtp.mailtrap.io, smtp.sendgrid.net
    //     port: 587, // Use 465 for SSL or 587 for TLS
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //     user: process.env.SMTP_USER, // Your SMTP email
    //     pass: process.env.SMTP_PASS, // Your SMTP password or API key
    //     },
    //  });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = { from: process.env.AUTH_EMAIL, to, subject, html: htmlContent };
    
    
    await transporter.sendMail(mailOptions);
    console.log('✅ Mail sent');
    return { success: true };
  } catch (error) {
    console.error("❌ Email Error:", error);
    return { success: false, message: error.message };
  }
};

export default sendEmail;
