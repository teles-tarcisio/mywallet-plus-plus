import { Router } from 'express';

import { registerUser, userLogin } from '../controllers/index.js';

const authRouter = Router();


authRouter.post('/sign-up', registerUser);

authRouter.post('/sign-in', userLogin);

export default authRouter;