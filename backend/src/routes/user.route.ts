import express from "express";
import { signup, login, getUser } from "../controllers/user.controller";
import { authentication } from "../middleware/authentication";

const userRoute = express.Router();

userRoute.post("/signUp", signup);
userRoute.post("/logIn", login);
userRoute.get("/currentUser", authentication, getUser);

export default userRoute;
