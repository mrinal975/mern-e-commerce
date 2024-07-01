import { Router } from "express";
import { storeProducts } from "../controllers/products.js";
import productSchema from "../validations/validateProductSchema.js";
import { isAuth } from "../middleware/isAuth.js";
import { checkSchema } from "express-validator";
import { uploadFiles } from "../middleware/multer.js";
const route = Router();

route.post(
  "/products",
  isAuth,
  checkSchema(productSchema),
  uploadFiles,
  storeProducts
);
export default route;
