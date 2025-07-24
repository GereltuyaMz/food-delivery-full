import express from "express";
import { signup, login, getUser } from "../controllers/user.controller";

const userRoute = express.Router();

userRoute.post("/signUp", signup);
userRoute.post("/logIn", login);
userRoute.post("/currentUser", getUser);

export default userRoute;
