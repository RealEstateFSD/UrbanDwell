import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register); // Ensure this is POST
router.post("/login", login);
router.post("/logout", logout);

export default router;
