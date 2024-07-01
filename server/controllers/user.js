import { matchedData, validationResult } from "express-validator";
import { User } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../middleware/sendMail.js";
const registerUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({ error: error.array() });
  }
  const data = matchedData(req);
  const userData = await User.findOne({ email: data.email });
  if (userData) {
    return res.status(422).json({ error: "Email already exists" });
  }
  const hashPassword = await bcrypt.hash(data.password, 10);
  data.password = hashPassword;

  const userObject = new User(data);
  await userObject.save();
  const otp = Math.floor(100000 + Math.random() * 900000);

  const activationToken = jwt.sign({ data, otp }, process.env.JWT_SECRET, {
    expiresIn: "50m",
  });
  await sendMail(data.email, "OTP", `Your OTP is ${otp}`);
  res.status(200).json({ msg: "OTP sent", activationToken });
};

const loginUser = async (req, res) => {
  console.log("login user");
  res.status(200).json({ msg: "hello" });
};
export { registerUser, loginUser };
