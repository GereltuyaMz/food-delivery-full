"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFood = exports.updateFood = exports.createFood = exports.getFoodByid = exports.getAllFoods = void 0;
const food_model_1 = require("../models/food.model");
const getAllFoods = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foods = yield food_model_1.Food.find();
        response.json({
            success: true,
            data: foods,
        });
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error: error,
        });
    }
});
exports.getAllFoods = getAllFoods;
const getFoodByid = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodId } = request.params; // 6853b667726e33f014c6f024
        const food = yield food_model_1.Food.findById(foodId);
        response.json({
            success: true,
            data: food,
        });
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error: error,
        });
    }
});
exports.getFoodByid = getFoodByid;
const createFood = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const food = request.body;
        const createdFood = yield food_model_1.Food.create(food);
        response.json({
            success: true,
            data: createdFood,
        });
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error: error,
        });
    }
});
exports.createFood = createFood;
const updateFood = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodId } = request.params;
        const updates = request.body;
        const updatedFood = yield food_model_1.Food.findByIdAndUpdate(foodId, updates, {
            new: true,
        });
        response.json({
            success: true,
            data: updatedFood,
        });
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error,
        });
    }
});
exports.updateFood = updateFood;
const deleteFood = (request, response) => {
    response.send("food/:foodId Delete huselt irlee");
};
exports.deleteFood = deleteFood;
