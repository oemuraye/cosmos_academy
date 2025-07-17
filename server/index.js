import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";

import joinRoutes from "./routes/api.js";
import contactRoutes from "./routes/api.js"; 
import userRoutes from "./routes/userRoutes.js";
import metricsRoutes from "./routes/metrics.js";

import connectMongoDB from "./config/mongodb.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
app.use(express.static(path.join(__dirname, "public")));

connectMongoDB();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));
app.use(express.json());

// API Routes
app.use("/api/join", joinRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes); 
app.use("/api/metrics", metricsRoutes);

app.get("/", (req, res) => res.send("🚀 Cosmos Academy Server Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));