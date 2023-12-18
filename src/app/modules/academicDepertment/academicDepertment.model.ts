import { Schema, model } from "mongoose";
import { TAcademicDepertment } from "./academicDepertment.interface";


const academicDepertmentSchema = new Schema<TAcademicDepertment>({
    name: {
        type: String,
        required: true,
        unique:true
    },
    academicFaculty: {
        type: Schema.Types.ObjectId,
        ref: 'academicFaculty'
    }
},{
    timestamps: true
})

academicDepertmentSchema.pre('save',async function (next){
    const isDepertmentExist = await AcademicDepertment.findOne({
        name: this.name
    })
    if(isDepertmentExist){
        throw new Error('This department is already exist!')
    }
    next()
})


academicDepertmentSchema.pre('findOneAndReplace', async function (next) {
    const query =this.getQuery()
    console.log(query)
    next()
})
export const AcademicDepertment = model<TAcademicDepertment>('AcademicDepertment', academicDepertmentSchema)