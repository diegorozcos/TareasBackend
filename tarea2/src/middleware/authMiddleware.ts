import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { HttpStatus } from "../types/http-status";

export const verificarToken = (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const token = req.header('Authorization');

    if (!token) {
        return Promise.resolve(res.status(HttpStatus.UNAUTHORIZED).json({ mensaje: 'Acceso denegado. Token no proporcionado.' }));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).usuario = decoded;
        return Promise.resolve(next());
    } catch (error) {
        return Promise.resolve(res.status(HttpStatus.UNAUTHORIZED).json({ mensaje: 'Token inválido' }));
    }
};
