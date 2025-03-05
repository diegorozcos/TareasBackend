import { Router } from 'express';
import { login } from '../controllers/authController';
import { getPerfil } from '../controllers/perfilController';
import { authenticateToken } from '../middlewares/perfilMiddleware';

const router = Router();

router.post('/login', login);

router.get('/perfil', authenticateToken, getPerfil);

export default router;
