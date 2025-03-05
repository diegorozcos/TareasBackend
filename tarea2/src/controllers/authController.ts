import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { HttpStatus } from "../types/http-status";

export function login(req: Request, res: Response){
    const { email, password } = req.body;
    const secret = process.env.JWT_SECRET;

    if(!secret) {
        throw new Error('Falta la variable de entorno');
    }

    if (email && password) {
        // Generación de token JWT
        const token = jwt.sign( {email, password}, secret);
        return res.json( {token} )
    }

    return res.status(HttpStatus.BAD_REQUEST).json( {error: 'Correo o contraseña no proporcionados'} );
}