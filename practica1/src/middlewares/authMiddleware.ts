import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    
}