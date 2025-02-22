import express from "express";
import mongoose from "mongoose";
import "dotenv/config"

import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log("error occured while connecting to database -> ", err);
  });

const app = express();

app.use(express.json());

app.listen(8000, () => {
  console.log("Server is running on port:8000");
});


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success : false,
    statusCode, 
    message
  })
})