import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/modal/student.modal';
import { StudentService } from 'src/app/service/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student = {
    name: '',
    age: 0,
    course: ''
  };
  //for check validation by default delare value false
  public submitted = false;
  public id!: number;

  constructor(private studentService: StudentService, public router: Router, private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      if (!isNaN(this.id)) {
        this.studentService.getStudentById(this.id).subscribe((student) => {
          this.student = student;
        });
      }
    });
  }

  // onSubmit i am checking if id is matching from recevied from router param the form will update else add and last is for show erreo if input is blank
  onSubmit(studentForm: NgForm) {
    if (studentForm.valid) {
      if (this.id) {
        // If this.id is defined, it's an update
        this.studentService.updateStudent(this.student).subscribe((result) => {
          console.log('Student updated:', result);
          this.toastr.success('Student updated succesfully');
          this.router.navigate(['/student-list']);
        });
      } else {
        // If this.id is not defined, it's an add
        this.studentService.createStudent(this.student).subscribe((result) => {
          console.log('Student added:', result);
          this.toastr.success('Student added succesfully');
          this.router.navigate(['/student-list']);
        });
      }
    } else {
      this.submitted = true;
    }
  }
}
