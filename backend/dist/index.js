"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const food_route_1 = __importDefault(require("./routes/food.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const foodOrder_route_1 = __importDefault(require("./routes/foodOrder.route"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // env buh values
mongoose_1.default.connect(process.env.MONGO_URI);
const server = (0, express_1.default)();
server.use(express_1.default.json());
const port = process.env.PORT;
server.use("/user", user_route_1.default);
server.use("/food", food_route_1.default);
server.use("/foodOrder", foodOrder_route_1.default);
server.get("/", (_request, response) => {
    response.send("Hello Dashka");
});
server.listen(port, () => {
    console.log(`server aslaa: ${port}`);
});
