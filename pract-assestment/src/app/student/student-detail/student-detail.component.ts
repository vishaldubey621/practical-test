import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/modal/student.modal';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() student!: Student ;
  @Input() childMessage: string | undefined;

  @Input() selectedStudent!: Student | null;

  constructor(private studentService: StudentService,private route: ActivatedRoute) { }

  //get id from param and display single infomation of student
  ngOnInit(): void {
    console.log("dfd",this.childMessage);
    
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.studentService.getStudentById(id).subscribe((student) => {
          this.student = student;
        });
      }
    });
  }
}
