import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { registerValidator, loginValidator } from '../validators/auth.validators';
import { authenticate } from '../middlewares/auth.middleware';
import { authorize } from '../middlewares/role.middleware';

const router = Router();

router.post('/login', loginValidator, validationMiddleware, login);
router.post('/register', authenticate, authorize(['ADMIN']), registerValidator, validationMiddleware, register);

export default router;
