import express from "express";
import { registerUser } from "../controllers/user.js";
import { validateUserSchema } from "../validation/user.js";
import { checkSchema } from "express-validator";

const router = express.Router();

router.post("/register", checkSchema(validateUserSchema), registerUser);

export default router;
