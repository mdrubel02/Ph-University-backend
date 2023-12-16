/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

const golobalErrorHandler = (err : any, req: Request, res: Response, next: NextFunction)=>{
    const statusCode = 500;
    const message = err.message || 'Something went wrong'
  return res.status(statusCode).json({
    success: false,
    message,
    error: err
  })
}

export default golobalErrorHandler;