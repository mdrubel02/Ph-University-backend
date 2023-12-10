import { z } from "zod"

const userValidationSchema = z.object({
    password: z.string({invalid_type_error: "password must be a string",})
    .max(15,{message: 'Password can not be more then 20 character'})
    .optional(),
})

export const UserValidation ={
    userValidationSchema
}