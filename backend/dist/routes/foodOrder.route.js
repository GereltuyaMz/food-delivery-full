"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodOrder_controller_1 = require("../controllers/foodOrder.controller");
const foodOrderRoute = express_1.default.Router();
foodOrderRoute.post("/", foodOrder_controller_1.createFoodOrder);
foodOrderRoute.get("/", foodOrder_controller_1.getAllOrder);
exports.default = foodOrderRoute;
