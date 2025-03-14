import { Router } from 'express';
import { createUser, getAllUsers, getSingleUser, updateUser, deleteUser } from '../controllers/userController';
import { verifyToken } from '../middlewares/authMiddleware';
import { verifyRole } from '../middlewares/userMiddleware';

const router = Router();

router.post('/', verifyToken, verifyRole('admin'), createUser);
router.get('/', verifyToken, verifyRole('admin'), getAllUsers);
router.get('/:id', verifyToken, verifyRole('admin'), getSingleUser);
router.put('/:id', verifyToken, verifyRole('admin'), updateUser);
router.delete('/:id', verifyToken, verifyRole('admin'), deleteUser);

export default router; 