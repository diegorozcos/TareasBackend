import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { HttpStatus } from "../types/http-status";

export const verificarToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).usuario = decoded;
        next();
    } catch (error) {
        res.status(HttpStatus.UNAUTHORIZED).json({ mensaje: 'Token inválido' });
    }
};
