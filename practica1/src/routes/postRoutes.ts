import { Router } from 'express';
import { createPost, getPosts } from '../controllers/postController';
import { verifyToken } from '../middlewares/authMiddleware';
const router = Router();

router.post('/', verifyToken, createPost);
router.get('/', verifyToken, getPosts);

export default router;