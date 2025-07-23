/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.model";
import { generateToken } from "../util/generateToken";

export const signup = async (req: Request, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      email,
      password: hashedPassword,
    });
    res
      .status(201)
      .json({ message: "create user is sucessfull", user: createdUser });
  } catch (error) {
    console.log("ERROR", error);
    res.status(500).json({ message: "Server Error", error: error });
  }
};

export const login = async (req: Request, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    } else {
      const isCheck = bcrypt.compareSync(
        password,
        user.password || "".toString()
      );
      if (!isCheck) {
        return res.status(400).json({
          message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
        });
      } else {
        const token = generateToken({ id: user._id });
        const { phoneNumber, email, address } = user;
        res.status(200).json({
          message: "success",
          token,
          user: { email, phoneNumber, address },
        });
      }
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
