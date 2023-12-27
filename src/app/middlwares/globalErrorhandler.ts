/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorSouce } from '../interface/error';
import config from '../config';
import { zodErrorHandler } from '../errors/handleZodErrors';
import mongoose from 'mongoose';
import handleValidationError from '../errors/handlerValidationError';

const golobalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  let errorSources: TErrorSouce = [
    {
      path: '',
      message: '',
    },
  ];

  //zod handler function
  if (err instanceof ZodError) {
    const simplifiedError = zodErrorHandler(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }else if(err instanceof mongoose.Error.ValidationError){
    const simplifiedMongooseError = handleValidationError(err)
    statusCode = simplifiedMongooseError.statusCode;
    message = simplifiedMongooseError.message;
    errorSources = simplifiedMongooseError.errorSources
  }



  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error: err,
    stack: config.NODE_ENV === 'development'? err?.stack : null
  });
};

export default golobalErrorHandler;

//error pattern
/*
1.success
2.message
3.errorSources:[
  path: "",
  message: ""
]
stack
*/
