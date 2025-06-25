import express from "express";
import foodsRouter from "./routes/food.route";
import userRouter from "./routes/user.route";
import foodOrderRouter from "./routes/foodOrder.route";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // env buh values

mongoose.connect(process.env.MONGO_URI as string);

const server = express();
server.use(express.json());

const port = process.env.PORT;

server.use("/user", userRouter);
server.use("/food", foodsRouter);
server.use("/foodOrder", foodOrderRouter);

server.get("/", (_request, response) => {
  response.send("Hello Dashka");
});

server.listen(port, () => {
  console.log(`server aslaa: ${port}`);
});
