import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();
const auth = authController();

router.post("/register", auth.registerUser);
router.post("/login", auth.loginUser);
router.post("/forgot-password", auth.forgotPassword);
router.post("/reset-password", auth.resetPassword);

export default router;
