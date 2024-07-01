const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("registerUser user");
  res.status(200).json({ msg: "hello" });
};

const loginUser = async (req, res) => {
  console.log("login user");
  res.status(200).json({ msg: "hello" });
};
export { registerUser, loginUser };
