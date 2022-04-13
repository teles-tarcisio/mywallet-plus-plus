import { Router } from 'express';
import authRouter from './authRouter.js';
import financesRouter from './financesRouter.js';

const mainRouter =  Router();
mainRouter.use(authRouter);
mainRouter.use(financesRouter);

export default mainRouter;