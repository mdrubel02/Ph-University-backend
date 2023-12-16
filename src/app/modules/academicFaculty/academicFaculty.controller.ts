import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicFacultyServices } from "./academicFaculty.service";


const createAcademicFaculty = catchAsync(async (req,res)=>{

    const result = await academicFacultyServices.createAcademicFacultyIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Successfully create academic faculty',
        data: result
    })
})

export const academicFacultyController = {
    createAcademicFaculty
}