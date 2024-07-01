import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose
      .connect("mongodb://localhost:27017/express_tutorial")
      .then(() => console.log("connected to mongoose"))
      .catch((err) => console.log("connection error", err));
  } catch (error) {
    console.log(error); 
  }
};
export default connectDB;
