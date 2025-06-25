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
exports.getAllOrder = exports.createFoodOrder = void 0;
const foodOrder_model_1 = require("../models/foodOrder.model");
const createFoodOrder = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = request.body;
        const createdOrder = yield foodOrder_model_1.FoodOrder.create(order);
        response.json({
            success: true,
            data: createdOrder,
        });
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error: error,
        });
    }
});
exports.createFoodOrder = createFoodOrder;
const getAllOrder = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield foodOrder_model_1.FoodOrder.find()
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
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error: error,
        });
    }
});
exports.getAllOrder = getAllOrder;
