import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { HttpStatus } from '../types/http-status';

export const login = (req: Request, res: Response): Promise<any> => {
    const { correo, contraseña } = req.body;

    if (!correo || !contraseña) {
        return Promise.resolve(res.status(HttpStatus.BAD_REQUEST).json({ mensaje: 'Correo y contraseña requeridos' }));
    }

    // Crear token
    const token = jwt.sign({ correo, contraseña }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return Promise.resolve(res.json({ token }));
};
