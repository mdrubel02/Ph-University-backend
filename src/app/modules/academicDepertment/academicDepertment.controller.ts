import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepertmentServices } from "./academicDepertment.service";

const createAcademicDepertment = catchAsync(async (req, res)=>{
    const result = await AcademicDepertmentServices.createAcademicDepertmentIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Successfully Academic depertment',
        data: result
    })
})

const getAllAcademicDepertment = catchAsync(async (req,res)=>{
    const result = await AcademicDepertmentServices.getAcademicDepertment()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Successfully Academic depertment',
        data: result
    })
})
const getSingleAcademicDepertment = catchAsync(async (req,res)=>{
    const id  = req.params.depertmentId;
    const result = await AcademicDepertmentServices.getSingleAcademicDepertment(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Successfully single Academic depertment',
        data: result
    })
})

// const updatedAcademicDepertment = catchAsync( async (req,res)=>{
//     const id = req.params.departmentId
//     const result = await 
// })

export const AcademicDepertmentController = {
    createAcademicDepertment,
    getAllAcademicDepertment,
    getSingleAcademicDepertment,
    // updatedAcademicDepertment
}