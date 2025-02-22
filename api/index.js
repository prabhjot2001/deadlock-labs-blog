import express from "express";
import mongoose from "mongoose";
import "dotenv/config"

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log("error occured while connecting to database -> ", err);
  });

const app = express();

app.listen(8000, () => {
  console.log("Server is running on port:8000");
});
