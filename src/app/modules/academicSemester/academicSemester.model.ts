import { model, Schema } from "mongoose";
import { TAcademicSemseter, TMonth } from "./academicSemester.interface";


const Month:TMonth[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 
const academicSemesterSchema = new Schema<TAcademicSemseter>({
    name: {
        type: String,
        enum: ['Autum', 'Summar', 'Fall'],
        required: true
    },
    code: {
        type: String,
        enum: ['01','02','03'],
        required: true
    },
    startMonth: {
        type: String,
    },
    endMonth: {
        type: String,
        required: true
    }
    
})

export const AcademicSemester = model<TAcademicSemseter>('AcademicSemester', academicSemesterSchema)