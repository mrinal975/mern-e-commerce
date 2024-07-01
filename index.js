import express from "express";
import routes from "./server/routes/index.js";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
