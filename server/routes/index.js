import { Router } from "express";
import userRouter from "./user.js";
const router = Router();
router.get("/api", (req, res) => {
  console.log("-----all-----");
  res.send({ msg: "hello" });
});

router.use("/api", userRouter);

export default router;
