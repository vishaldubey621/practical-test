import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/modal/student.modal';
import { StudentService } from 'src/app/service/student.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = []; // varible for store data of getAllStudents
  selectedStudent: Student | null = null;
  parentMessage = 'Hello from the parent!';

  constructor(private studentService : StudentService,private router : Router) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  //Get All student and store in student variable to iterate data in table
  getAllStudents()
  {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      console.log(students);
    });
  }

  //Delete student list from table i have used sweetalert for ask you want to delete ?
  deleteStudent(id: number): void {
    // Show a confirmation dialog using SweetAlert2
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService
          .deleteStudent(id)
          .then(() => {
            // Delete was successful; show a success message using SweetAlert2
            Swal.fire({
              title: 'Deleted!',
              text: 'Your student has been deleted.',
              icon: 'success'
            });
  
            // You can also update your UI to reflect the deleted student.
            this.getAllStudents();
          })
          .catch((error) => {
            // Delete operation failed; show an error message using SweetAlert2
            Swal.fire({
              title: 'Error',
              text: 'Failed to delete the student.',
              icon: 'error'
            });
  
            console.error('Failed to delete student:', error);
          });
      }
    });
  }

  //View student details data with id and store in selectedStudent varaible
  viewStudentdetail(studentId:number)
  {//using obserable to get all student data
    this.studentService.getStudentById(studentId).subscribe((student) => {
      this.selectedStudent = student;
      console.log("23423",this.selectedStudent);
    });
    this.router.navigate([`/students/${studentId}`]);
  }

  //function for update if user will click on update then i will redirect to form with id for autofill data
  updateStudent(studentId:number)
  {
    this.router.navigate([`/add-student/${studentId}`]);
  }
}
