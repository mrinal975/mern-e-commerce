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
  const otp = Math.floor(100000 + Math.random() * 900000);

  const activationToken = jwt.sign({ data, otp }, process.env.JWT_SECRET, {
    expiresIn: "50m",
  });
  await sendMail(data.email, "OTP", `Your OTP is ${otp}`);
  return res.status(200).json({ msg: "OTP sent", activationToken });
};

const verifyUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({ error: error.array() });
  }
  const { activationToken, otp } = matchedData(req);
  const verify = jwt.verify(activationToken, process.env.JWT_SECRET);
  if (!verify) {
    return res.status(422).json({ error: "Invalid Token" });
  }
  console.log("------", verify, otp);
  if (verify.otp != otp) {
    return res.status(422).json({ error: "Invalid OTP" });
  }
  await User.create(verify.data);
  return res.status(200).json({ msg: "User created" });
};

const loginUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({ error: error.array() });
  }
  const { email, password } = matchedData(req);
  const userData = await User.findOne({ email });
  if (!userData) {
    return res.status(422).json({ error: "Invalid Email" });
  }
  const validPassword = await bcrypt.compare(password, userData.password);
  if (!validPassword) {
    return res.status(422).json({ error: "Invalid Password" });
  }
  const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  return res.status(200).json({ msg: "login success", token, userData });
};

const profile = async (req, res) => {
  const { id } = req.user;
  const userData = await User.findById(id);
  return res.status(200).json({ userData });
};

export { registerUser, loginUser, verifyUser, profile };
