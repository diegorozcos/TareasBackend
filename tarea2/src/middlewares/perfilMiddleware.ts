import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { HttpStatus } from '../types/http-status';

export function authenticateToken(req: Request, res: Response, next: NextFunction){
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(HttpStatus.FORBIDDEN).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: 'Token no válido' });
    }
    req.user = user;
    next();
  });
};
