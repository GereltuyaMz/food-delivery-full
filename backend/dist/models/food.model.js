"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const food = new Schema({
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    createdAt: Date,
    updatedAt: Date,
});
exports.Food = model("Food", food);
