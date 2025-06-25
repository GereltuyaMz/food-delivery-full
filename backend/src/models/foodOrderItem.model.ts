import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const foodOrderItemSchema = new Schema({
  food: {
    type: Types.ObjectId,
    ref: "Food",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

export const FoodOrderItem = model("FoodOrderItem", foodOrderItemSchema);
