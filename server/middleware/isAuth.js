import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log("auth", authorization);
  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = authorization;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};
