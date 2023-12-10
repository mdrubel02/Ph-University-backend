import express from "express";
import { UserControllers } from "./user.controller";
import { studentValidationSchema } from "../student/student.validation";
import validateRequest from "../../middlwares/vaildRequest";


const router = express.Router();

router.post('/create-student',validateRequest(studentValidationSchema), UserControllers.createStudent);

export const UserRoutes = router;