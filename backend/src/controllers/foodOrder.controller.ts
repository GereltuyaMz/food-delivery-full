import { Request, Response } from "express";
import { FoodOrder } from "../models/foodOrder.model";

export const createFoodOrder = async (request: Request, response: Response) => {
  try {
    const order = request.body;

    const createdOrder = await FoodOrder.create(order);

    response.json({
      success: true,
      data: createdOrder,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const getAllOrder = async (request: Request, response: Response) => {
  try {
    const orders = await FoodOrder.find()
      .populate("user")
      .populate({
        path: "foodOrderItems",
        populate: {
          path: "food",
        },
      });
    response.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
