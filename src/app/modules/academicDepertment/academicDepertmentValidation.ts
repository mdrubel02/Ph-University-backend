import { z } from "zod";

const academicDepertmentValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        academicFaculty: z.string()
    })
})


export const AcademicDepertmentVailtion = {
    academicDepertmentValidationSchema,
}