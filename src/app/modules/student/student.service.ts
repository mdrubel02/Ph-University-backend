import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { User } from '../user/user.model';
import { TStudent } from './student.interface';
import QueryBuilder from '../../builder/QueryBuilder';

const getAllStudentsFromDB = async (query: Record<string,unknown>) => {
  // console.log(query, 'base query')
  // const queryObj = {...query}
  // console.log(queryObj, 'deaclear queryObj')
  //any collection search of format 
  //{email: {$regex: "qeery.searchTerm", $options: i}}
const studentSearchableFields = ['email','name.firstName','presentAddress']
  // let searchTerm = '';
  // if(query?.searchTerm){
  //   searchTerm = query?.searchTerm as string
  // }

  // const searchQuery = Student.find({
  //   $or: studentSearchableFields.map((field)=>({
  //     [field]: {$regex: searchTerm, $opitons :'i'}
  //   }))
  // })

  // Filtering
  // const excludeFields = ['searchTerm', 'page']
  // excludeFields.forEach(el => delete queryObj[el])
  // console.log(query, queryObj, 'after proccess')
  const studentQuery = new QueryBuilder(
    Student.find()
      .populate('admissionSemester')
      .populate({
        path: 'academicDepartment',
        populate: {
          path: 'academicFaculty',
        },
      }),
    query,
  ).search(studentSearchableFields)
  .filter()
  .sort()
  .paginate()
  .fields();
    const result = await studentQuery.modelQuery;
    return result;
};

const getSingleStudentFromDB = async (id: string) => {
  //find by single student with aggregate
  // const result = await Student.aggregate([{ $match: { id } }]);
  const result = await Student.findById(id)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.NOT_FOUND, 'failed to delete student');
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser) {
      throw new AppError(httpStatus.NOT_FOUND, 'Failed to Delete user');
    }
    await session.commitTransaction();
    await session.endSession();
    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};
const updateStudents = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian , ...remainingStudentData} = payload;

  const modifiedUpdateData : Record<string, unknown> = {...remainingStudentData}
  /*
  guardain: {
    fatherOccupation: "Teacher"
  }

  guardian.fatherOccupation = teacher
  name.firstName = 'rubel'
  name.lastName = 'robin'
  */

  if(name && Object.keys(name).length){
    for(const [key,value] of Object.entries(name)){
      modifiedUpdateData[`name.${key}`]= value
    }
  }
  if(guardian && Object.keys(guardian).length){
    for(const [key,value] of Object.entries(guardian)){
      modifiedUpdateData[`guardian.${key}`]= value
    }
  }
  if(localGuardian && Object.keys(localGuardian).length){
    for(const [key,value] of Object.entries(localGuardian)){
      modifiedUpdateData[`localGuardian.${key}`]= value
    }
  }
  const result = await Student.findOneAndUpdate({ id }, payload);
  return result;
};
export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudents,
};
