import { model, Schema } from "mongoose";
import { TAcademicSemseter } from "./academicSemester.interface";
import { AcademicSemestercode, AcademicSemestername, months } from "./academicSemester.constant";

const academicSemesterSchema = new Schema<TAcademicSemseter>({
    name: {
        type: String,
        enum: AcademicSemestername,
        required: true
    },
    year: {
        type:String,
        required: true
    },
    code: {
        type: String,
        enum: AcademicSemestercode,
        required: true
    },
    startMonth: {
        type: String,
        enum: months,
        required:true
    },
    endMonth: {
        type: String,
        enum: months,
        required:true
    }
    
},
{
    timestamps:true
}
)

academicSemesterSchema.pre('save', async function (next){
    const isSemesterExists = await AcademicSemester.findOne({
        year: this.year,
        name:this.name
    })
    if(isSemesterExists){
        throw new Error('Semester is already exists')
    }
    next()
})

export const AcademicSemester = model<TAcademicSemseter>('AcademicSemester', academicSemesterSchema)