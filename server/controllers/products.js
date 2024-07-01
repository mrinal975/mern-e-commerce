import { matchedData, validationResult } from "express-validator";
import { Product } from "../models/Products.js";

const storeProducts = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({ error: error.array() });
  }
  const data = matchedData(req);
  console.log("data", data);
  //   const product = await Product.create(data);
  return res.status(200).json({ msg: "Product created" });
};

export { storeProducts };
