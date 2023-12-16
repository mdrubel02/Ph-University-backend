import { TAcademicFaculty } from "./academicFaculty.interface"
import { academicFaculty } from "./academicFaculty.model"

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty)=>{
    const result = await academicFaculty.create(payload)
    return result;
}

const getAllAcademicFaculty = async ()=>{
    const result = await academicFaculty.find()
    return result
}

export const academicFacultyServices = {
    createAcademicFacultyIntoDB,
    getAllAcademicFaculty
}