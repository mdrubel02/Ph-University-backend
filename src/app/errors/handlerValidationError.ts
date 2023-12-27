import mongoose from "mongoose"
import { TErrorSouce } from "../interface/error"
import httpStatus from "http-status"

const handleValidationError = (
    err: mongoose.Error.ValidationError,
  ) => {
    
   //this is a forEach method
   //const errorValues = Object.values(err.errors)
    // const errorSources: TErrorSouce = []
    // errorValues.forEach((errObj) => {
    //     errorSources.push({
    //     path: errObj.path,
    //     message: errObj.message,
    //   })
    // })

    //and this is map method on object
    const errorSources : TErrorSouce = Object.values(err.errors).map(
        (val)=>{
        return {
            path: val?.path,
            message: val?.message
        }
    })
  
    return {
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Validation Error',
      errorSources,
    }
  }
  
  export default handleValidationError