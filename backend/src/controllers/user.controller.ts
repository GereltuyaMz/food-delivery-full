import { Request, Response } from "express";
import { User } from "../models/user.model";

export const createUser = async (request: Request, response: Response) => {
  try {
    const user = request.body;
    const createdUser = await User.create(user);

    response.json({
      success: true,
      data: createdUser,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
