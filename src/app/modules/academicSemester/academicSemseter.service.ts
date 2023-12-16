import { academciSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemseter} from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemisetIntoDB = async (payload: TAcademicSemseter)=>{
   // AcademicSemester.findOne({year})

   //semester name --> semester code
   if(academciSemesterNameCodeMapper[payload.name]!== payload.code){
    throw new Error("invaild semester code")
   }
    const result = await AcademicSemester.create(payload);
    return result
}
const getAllAcademicSemestersFromDB = async () => {
    const result = await AcademicSemester.find();
    return result;
  };
  
  const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await AcademicSemester.findById(id);
    return result;
  };
  
  const updateAcademicSemesterIntoDB = async (
    id: string,
    payload: Partial<TAcademicSemseter>,
  ) => {
    if (
      payload.name &&
      payload.code &&
      academciSemesterNameCodeMapper[payload.name] !== payload.code
    ) {
      throw new Error('Invalid Semester Code');
    }
  
    const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  };

export const AcademicSemesterServices = {
    createAcademicSemisetIntoDB,
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterIntoDB,
}