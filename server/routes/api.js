import express from "express";
import { forgetPassword, getUser, login, register, resetPassword, verifyUserByEmail } from "../controllers/userController.js";
import verifyToken from "../middleware/verifyTiken.js";

const router = express.Router();

// /api/auth/user
// Get user after verify

router.get('/user', verifyToken , getUser)


// @/api/auth/register
router.post("/register", register);

// Login user
// @/api/auth/login
router.post("/login",login);

// Forgot Password
// @/api/auth/forgot
router.post("/forgot", forgetPassword);

// Reset Password
// @/api/auth/reset/:token
router.post("/reset/:token",resetPassword);

// Verify Email
// @/api/auth/verify/:token
router.get('/verify/:token',verifyUserByEmail);

export default router;
