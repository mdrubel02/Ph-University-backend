import { TAcademicSemseter } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";

const findLastStudentId = async () => {
    const lastStudent = await User.findOne(
      {
        role: 'student',
      },
      {
        id: 1,
        _id: 0,
      },
    )
      .sort({
        createdAt: -1,
      })
      .lean();
  
    return lastStudent?.id ? lastStudent.id : undefined;
  };
export const generateStudentId = async (payload: TAcademicSemseter )=> {
    let currentId = (0).toString(); //by deafult 0000
    const lastStudentId = await findLastStudentId(); //2030 02 0001
  
    const lastStudentSemesterCode = lastStudentId?.substring(4, 6);// code 02
    const lastStudentYear = lastStudentId?.substring(0, 4); //2030 year
  
    const currentSemesterCode = payload.code; //eita current year code 2030
    const currentYear = payload.year; //eita current code 02
  
    if (
      lastStudentId &&
      lastStudentSemesterCode === currentSemesterCode &&
      lastStudentYear === currentYear
    ) {
      currentId = lastStudentId.substring(6); //0001
    }
  
    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  
    incrementId = `${payload.year}${payload.code}${incrementId}`;
  
    return incrementId;
  };