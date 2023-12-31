/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';



const getSingleStudent = catchAsync(async (
  req,
  res,
  next,) => {
  
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
})
const getAllStudents  = catchAsync(async (
  req,
  res,
  next,
) => {
    console.log(req.query)
    const result = await StudentServices.getAllStudentsFromDB(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    });
  
})
const updateStudent = catchAsync(async (req,res, next)=>{
  const {studentId} = req.params;
  const {student} = req.body;
  const result = await StudentServices.updateStudents(studentId,student)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student updated succesfully',
    data: result,
  });
})
const deleteStudent = catchAsync(async (
  req,
  res,
  next,
) => {
 
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
})

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent
};
