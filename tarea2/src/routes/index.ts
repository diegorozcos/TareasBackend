import express from 'express';
import { login } from './../controllers/authController';
import { perfil } from './../controllers/profileController';
import { verificarToken } from './../middleware/authMiddleware';

const router = express.Router();

router.post('/login', login);
router.get('/perfil', verificarToken, perfil);

export default router;
