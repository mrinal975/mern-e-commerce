import { matchedData, validationResult } from "express-validator";
const registerUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({ error: error.array() });
  }
  const data = matchedData(req);
  console.log("registerUser user");
  res.status(200).json(data);
};

const loginUser = async (req, res) => {
  console.log("login user");
  res.status(200).json({ msg: "hello" });
};
export { registerUser, loginUser };
