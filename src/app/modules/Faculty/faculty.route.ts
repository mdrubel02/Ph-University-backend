import express from 'express'
import { FacultyControllers } from './faculty.controller';
import validateRequest from '../../middlwares/vaildRequest';
import { createFacultyValidationSchema, updateFacultyValidationSchema } from './faculty.validation';

const router = express.Router();

router.post('/',validateRequest(createFacultyValidationSchema),FacultyControllers.createFaculties)

router.get('/:id', FacultyControllers.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete('/:id', FacultyControllers.deleteFaculty);

router.get(
  '/',
  FacultyControllers.getAllFaculties,
);

export const FacultyRoutes = router;