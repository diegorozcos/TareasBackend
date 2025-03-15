import dotenv from 'dotenv';
dotenv.config()
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { HttpStatus } from '../types/httpStatus';

const secret = process.env.JWT_SECRET;

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: "Access denied. Token was not given" });
        return;
    }

    try {
        const decoded = jwt.verify(token as string, secret as string);
        (req as any).user = decoded;
        next();
    } catch (error) {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: "Invalid token" });
        return; 
    }
}