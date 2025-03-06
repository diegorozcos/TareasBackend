import { Request, Response } from 'express';

export const perfil = (req: Request, res: Response) => {
    res.json({ usuario: (req as any).usuario });
};