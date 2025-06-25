"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderItem = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model, Types } = mongoose_1.default;
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
exports.FoodOrderItem = model("FoodOrderItem", foodOrderItemSchema);
