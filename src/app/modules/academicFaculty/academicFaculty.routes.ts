import express from 'express';
import { academicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlwares/vaildRequest';
import { academicFacultyValidation } from './academicFaculty.validation';
const router = express.Router()

router.post('/create-academic-faculty',validateRequest(academicFacultyValidation.academicFacultyValidationSchema),academicFacultyController.createAcademicFaculties)
router.get('/',academicFacultyController.getAcademicFaculties)

export const AcademicFacultyRoutes = router;