import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from "express";
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';
import { HttpStatus } from "../types/httpStatus";
import userModel from './../models/user';
const secret = process.env.JWT_SECRET;

export const signup = async (req: Request, res: Response): Promise<any> => {
    try {
        const {name, email, password} = req.body;
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return Promise.resolve(res.status(HttpStatus.BAD_REQUEST).json({ message: "User already exists"}));
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({name, email, password: hashedPassword })
        await newUser.save();

        Promise.resolve(res.status(HttpStatus.CREATED).json({ message: "User created successfully"}));
    } catch (error) {
        Promise.resolve(res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "An error occured while creating the user", error}));
    }
}

export const login = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return Promise.resolve(res.status(HttpStatus.BAD_REQUEST).json({ message: "User not found." }));
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return Promise.resolve(res.status(HttpStatus.BAD_REQUEST).json({ message: "Incorrect password." }));
        }

        if (!secret) {
            return Promise.resolve(res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "JWT secret is not defined" }));
        }

        const token = jwt.sign({ id: user._id, name: user.name, role: user.role}, secret);

        Promise.resolve(res.json({ token }));
    } catch (error) {
        Promise.resolve(res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error while logging in: ", error}));
    }
}

export const profile = (req: Request, res: Response) => {
    res.json({ user: (req as any).user });
}