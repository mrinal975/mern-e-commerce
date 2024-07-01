import { Router } from "express";
import { checkSchema } from "express-validator";
import {
  registerUser,
  loginUser,
  verifyUser,
  profile,
} from "../controllers/user.js";
import {
  userSchemaValidation,
  verifyToken,
  loginValidation,
} from "../validations/validateUserSchema.js";
import { isAuth } from "../middleware/isAuth.js";
const route = Router();

route.post("/register", checkSchema(userSchemaValidation), registerUser);
route.post("/login", checkSchema(loginValidation), loginUser);
route.post("/verify", checkSchema(verifyToken), verifyUser);
route.get("/profile", isAuth, profile);

export default route;
