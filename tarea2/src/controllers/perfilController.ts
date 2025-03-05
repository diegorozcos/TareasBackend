import { Request, Response } from 'express';

export const getPerfil = (req: Request, res: Response) => {
  const { email, password } = req.user as { email: string, password: string };
  return res.json({ email, password });
};
