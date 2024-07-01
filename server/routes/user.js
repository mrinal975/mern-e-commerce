import { Router } from "express";
import { checkSchema } from "express-validator";
import { registerUser, loginUser } from "../controllers/user.js";
import validateUserSchema from "../validations/validateUserSchema.js";
const route = Router();

route.post("/register", checkSchema(validateUserSchema), registerUser);
route.post("/login", loginUser);

export default route;
