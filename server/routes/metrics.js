import express from "express";
import { getUserMetrics } from "../controllers/metricsController.js";

const router = express.Router();
router.get("/users", getUserMetrics);

export default router;