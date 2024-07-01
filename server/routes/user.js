import { Router } from "express";
import { checkSchema } from "express-validator";
import { registerUser, loginUser, verifyUser } from "../controllers/user.js";
import {
  userSchemaValidation,
  verifyToken,
  loginValidation,
} from "../validations/validateUserSchema.js";
const route = Router();

route.post("/register", checkSchema(userSchemaValidation), registerUser);
route.post("/login", checkSchema(loginValidation), loginUser);
route.post("/verify", checkSchema(verifyToken), verifyUser);

export default route;
