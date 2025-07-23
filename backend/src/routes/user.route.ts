import express from "express";
import { signup, login } from "../controllers/user.controller";

const userRoute = express.Router();

userRoute.post("/signUp", signup);
userRoute.post("/logIn", login);

export default userRoute;
