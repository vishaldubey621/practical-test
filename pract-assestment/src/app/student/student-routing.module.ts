import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


const routes: Routes = [
  {
    path : '', redirectTo : 'student-list' , pathMatch :'full', // check if routing is blank then redirect to student list
  },
  {path :'student-list', component : StudentListComponent}, // routing for list of student
  {path :'add-student', component: AddStudentComponent}, // routing for add student
  {path :'add-student/:id', component: AddStudentComponent}, //its open from data based on and autofill data in form for update
  { path: 'students/:id', component: StudentDetailComponent }, //routing for view student details
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
