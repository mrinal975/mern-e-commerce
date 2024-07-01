import { Router } from "express";
const router = Router();
router.get("/api", (req, res) => {
  console.log("-----all-----");
  res.send({ msg: "hello" });
});

export default router;
