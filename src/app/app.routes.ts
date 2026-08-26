import { Routes } from '@angular/router';

import { StudentList } from './components/student-list/student-list';
import { AddStudent } from './components/add-student/add-student';
import { StudentDetail } from './components/student-detail/student-detail';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },

  {
    path: 'students',
    component: StudentList,
    title: 'Student List'
  },

  {
    path: 'students/add',
    component: AddStudent,
    title: 'Add Student'
  },

  {
    path: 'students/:id',
    component: StudentDetail,
    title: 'Student Detail'
  }

];