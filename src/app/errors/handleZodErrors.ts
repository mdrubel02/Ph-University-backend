import { ZodError } from "zod";
import { TErrorSouce } from "../interface/error";
import httpStatus from "http-status";



export const zodErrorHandler = (err: ZodError) => {
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