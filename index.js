import express from "express";
import routes from "./server/routes/index.js";
import { configDotenv } from "dotenv";
import dbConnection from "./server/database/DB.js";
configDotenv();
dbConnection();

const app = express();
app.use(express.json());
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log("Listening on port 3000");
});
