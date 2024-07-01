import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.js";
const route = Router();

route.get("/register", registerUser);
route.get("/login", loginUser);

export default route;
