import express from 'express'
import { AcademicDepertmentController } from './academicDepertment.controller'
// import validateRequest from '../../middlwares/vaildRequest'
// import { AcademicDepertmentVailtion } from './academicDepertmentValidation'

const router = express.Router()
router.post('/create-academic-depertment', 
// validateRequest(AcademicDepertmentVailtion.academicDepertmentValidationSchema),
AcademicDepertmentController.createAcademicDepertment)
router.patch('/:depertmentId',AcademicDepertmentController.updatedAcademicDepertment)
router.get('/',AcademicDepertmentController.getAllAcademicDepertment)
router.get('/:depertmentId',AcademicDepertmentController.getSingleAcademicDepertment)



export const AcademicDepertmentRoute = router