import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.routes";
import { AcademicDepertmentRoute } from "../modules/academicDepertment/academicDepertment.routes";
import { FacultyRoutes } from "../modules/Faculty/faculty.route";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { CourseRoutes } from "../modules/Course/course.route";

const router = Router()

const modulesRoutes = [
    {
        path: '/users',
        route: UserRoutes
    },
    {
        path: '/students',
        route: StudentRoutes
    },
    {
        path: '/academic-semesters',
        route: AcademicSemesterRoutes
    },
    {
        path: '/academic-faculties',
        route: AcademicFacultyRoutes
    },
    {
        path: '/academic-depertment',
        route: AcademicDepertmentRoute
    },
    {
        path: '/faculties',
        route: FacultyRoutes,
    },
    {
      path: '/admins',
      route: AdminRoutes,
    },
    {
      path: '/courses',
      route: CourseRoutes,
    }
]

modulesRoutes.forEach(( route ) => router.use(route.path,route.route))

export default router;