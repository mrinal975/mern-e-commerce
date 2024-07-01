import { User } from "../models/Uses.js";
import { validationResult, matchedData } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    //check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    console.log("-----------");
    
    const data = matchedData(req);
    const hashPassword = await bcrypt.hash(data.password, 10);
    data.password = hashPassword;

    const otp = Math.floor(100000 + Math.random() * 900000);

    const activationToken = jwt.sign({ data, otp }, process.env.JWT_SECRET, {
      expiresIn: "50m",
    });

    //check if user already exists
    let hasUser = await User.findOne({ email: data.email });
    if (hasUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const user = await User.create(data);

    // send mail
    await sendMail(data.email, "Account Activation", `Your OTP is ${otp}`);
    res.status(201).json({
      success: true,
      message: "Otp send to your email",
      activationToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { registerUser };
