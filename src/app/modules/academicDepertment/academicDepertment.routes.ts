import express from 'express'
import { AcademicDepertmentController } from './academicDepertment.controller'
import validateRequest from '../../middlwares/vaildRequest'
import { AcademicDepertmentVailtion } from './academicDepertmentValidation'

const router = express.Router()

router.post('/create-academic-depertment', validateRequest(AcademicDepertmentVailtion.academicDepertmentValidationSchema),AcademicDepertmentController.createAcademicDepertment)
router.patch('/:depertmentId',)


export const AcademicDepertmentRoute = router