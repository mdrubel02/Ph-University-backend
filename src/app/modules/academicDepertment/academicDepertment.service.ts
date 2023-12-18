import { TAcademicDepertment } from './academicDepertment.interface';
import { AcademicDepertment } from './academicDepertment.model';

const createAcademicDepertmentIntoDB = async (payload: TAcademicDepertment) => {
  // const isDepertment = await AcademicDepertment.findOne({
  //   name: payload.name
  // })
  // if(isDepertment){
  //   throw new Error('this department already exsist')
  // }
  const result = await AcademicDepertment.create(payload);
  return result;
};

const getAcademicDepertment = async () => {
  const result = await AcademicDepertment.find();
  return result;
};

const getSingleAcademicDepertment = async (id: string) => {
  const result = await AcademicDepertment.findById(id);
  return result;
};

const updatedAcademicDepertment = async (
  id: string,
  payload: TAcademicDepertment,
) => {
  const result = await AcademicDepertment.findOneAndUpdate({_id: id}, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepertmentServices = {
  createAcademicDepertmentIntoDB,
  getAcademicDepertment,
  getSingleAcademicDepertment,
  updatedAcademicDepertment,
};
