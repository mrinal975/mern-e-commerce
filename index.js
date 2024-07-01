import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import userRouters from "./server/routes/user.js";
import connectDB from "./server/database/db.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(connectDB);
app.use("/api", userRouters);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on http://locahost:${port}`);
});
