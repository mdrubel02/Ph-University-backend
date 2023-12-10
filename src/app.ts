import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import golobalErrorHandler from './app/middlwares/globalErrorhandler';
import notFound from './app/middlwares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response)=>{
  res.send('hello rubel developer')
})

app.use(golobalErrorHandler) 
//not found route
app.use(notFound)

export default app;
