import { TAcademicFaculty } from "./academicFaculty.interface"
import { AcademicFaculty } from "./academicFaculty.model"

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty)=>{
    const result = await AcademicFaculty.create(payload)
    return result;
}

const getAllAcademicFaculty = async ()=>{
    const result = await AcademicFaculty.find()
    return result
}

export const academicFacultyServices = {
    createAcademicFacultyIntoDB,
    getAllAcademicFaculty
}