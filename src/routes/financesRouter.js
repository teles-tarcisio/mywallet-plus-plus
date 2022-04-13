import { Router } from 'express';
import { newTransaction, getTransactions, sumTransactions } from '../controllers/index.js';


const financesRouter = Router();

financesRouter.post("/financial-events", newTransaction);

financesRouter.get("/financial-events", getTransactions);

financesRouter.get("/financial-events/sum", sumTransactions);

export default financesRouter;