import { Router } from 'express';
import { registerUser, userLogin } from '../controllers/index.js';
import { checkSignUpDataMiddleware, checkSignInDataMiddleware } from '../middlewares/index.js';

const authRouter = Router();

authRouter.post('/sign-up', checkSignUpDataMiddleware, registerUser);

authRouter.post('/sign-in', checkSignInDataMiddleware, userLogin);

export default authRouter;
