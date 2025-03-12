import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from "express";
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';
import { HttpStatus } from "../types/httpStatus";
import User from './../models/user';

const secret = process.env.JWT_SECRET;

export const signup = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body;
    } catch (error) {

    }
}

export const login = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
}

export const profile = async (req: Request, res: Response) => {
    
}