/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import httpStatus from 'http-status';
import { ZodError } from 'zod';
import { TErrorSouce } from '../interface/error';
import config from '../config';

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
  const zodErrorHandler = (err: ZodError) => {
    const errorSources : TErrorSouce= err.issues.map((issue) => {
      return {
        path: issue?.path[issue?.path.length - 1],
        message: issue?.message,
      };
    });
    return {
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Validation Error',
      errorSources,
    };
  };

  if (err instanceof ZodError) {
    const simplifiedError = zodErrorHandler(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
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
