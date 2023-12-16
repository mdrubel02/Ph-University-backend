import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlwares/vaildRequest';
import { AcademicSemestervalidations } from './academicSemester.validation';

const router = express.Router();

//create academic route
router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemestervalidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemister,
);
router.get('/:courseId', AcademicSemesterController.getSingleAcademicSemester);
router.patch(
  '/:courseId',
  validateRequest(
    AcademicSemestervalidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
);

router.get('/', AcademicSemesterController.getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;
