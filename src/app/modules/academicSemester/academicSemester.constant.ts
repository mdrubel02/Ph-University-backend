import { TAcademicSemseterCode, TAcademicSemseterName, TMonths, TacademciSemesterNameCodeMapper } from "./academicSemester.interface"

export const months:TMonths[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 
export const AcademicSemestername : TAcademicSemseterName[] = ['Autum', 'Summar', 'Fall']
export const AcademicSemestercode : TAcademicSemseterCode[] = ['01','02','03']

export const academciSemesterNameCodeMapper: TacademciSemesterNameCodeMapper = {
    Autum : '01',
    Summar: '02',
    Fall: '03'
   }