import dotenv from 'dotenv';
dotenv.config()
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { HttpStatus } from '../types/httpStatus';

const secret = process.env.JWT_SECRET;

export const verifyToken = (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const token = req.header('Authorization');

    if (!token) {
        return Promise.resolve(res.status(HttpStatus.UNAUTHORIZED).json({ message: "Access denied. Token was not given" }));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).user = decoded;
        return Promise.resolve(next());
    } catch (error) {
        return Promise.resolve(res.status(HttpStatus.UNAUTHORIZED).json({ message: "Invalid token" }));
    }
}