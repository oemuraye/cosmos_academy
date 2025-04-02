import express from "express";
import { handleJoinRequest } from "../controllers/joinController.js";
import { handleContactRequest } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", handleJoinRequest);
router.post("/", handleContactRequest);

export default router;
