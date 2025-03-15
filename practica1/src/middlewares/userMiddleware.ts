import { Request, Response, NextFunction } from "express";
import { HttpStatus } from '../types/httpStatus';

export const verifyRole = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = (req as any).user.role;

        if (userRole !== role) {
            res.status(HttpStatus.FORBIDDEN).json({ message: "Access denied. Admin only." });
            return; 
        }
        next();
    };
};
