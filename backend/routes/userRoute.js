import express from "express";
import { registerUser, loginUser, loginAdmin } from "../controllers/userController.js";

const router = express.Router();

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Admin login route
router.post("/admin", loginAdmin);



export default router;