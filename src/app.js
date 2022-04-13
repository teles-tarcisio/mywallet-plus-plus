import express from "express";
import cors from "cors";
import 'express-async-errors';

import mainRouter from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(mainRouter);

export default app;
