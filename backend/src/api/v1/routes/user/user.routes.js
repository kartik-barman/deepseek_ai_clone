import express from "express";
import { signup } from "../../controllers/user/user.controller.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
