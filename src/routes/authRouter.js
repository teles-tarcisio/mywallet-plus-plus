import { Router } from 'express';

import { registerUser, userLogin } from '../controllers/index.js';
import { checkSignUpDataMiddleware } from '../middlewares/checkSignUpDataMiddleware.js';

const authRouter = Router();


authRouter.post('/sign-up', checkSignUpDataMiddleware, registerUser);

authRouter.post('/sign-in', userLogin);

export default authRouter;