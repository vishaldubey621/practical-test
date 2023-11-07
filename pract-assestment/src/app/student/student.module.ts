import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  declarations: [
    StudentListComponent,
    AddStudentComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
  ]
})
export class StudentModule { }
