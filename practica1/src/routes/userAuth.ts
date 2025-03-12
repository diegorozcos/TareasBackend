import { Router } from "express";
import { signup, login, profile } from "../controllers/authController";
import { verifyToken } from "../middlewares/authMiddleware";

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', verifyToken, profile);

export default router;