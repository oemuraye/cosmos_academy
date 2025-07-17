import express from "express";
import { getUsers, getUserById,  deleteUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);          
router.get("/:id", getUserById);  
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;