import express from "express";
import {
  createFoodOrder,
  getAllOrder,
} from "../controllers/foodOrder.controller";

const foodOrderRoute = express.Router();

foodOrderRoute.post("/", createFoodOrder);
foodOrderRoute.get("/", getAllOrder);

export default foodOrderRoute;
