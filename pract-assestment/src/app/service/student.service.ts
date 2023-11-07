import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../modal/student.modal';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:3000/students'; 
  private studentDataSubject = new BehaviorSubject<Student | undefined>(undefined);
  studentData$ = this.studentDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  // For get All Students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  //Get Student By Id
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  // Create Student 
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  //Update Student
  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${student.id}`, student);
  }

 //Usees promisses for acceept or reject data
  deleteStudent(id: number): Promise<void> {
  return this.http
    .delete<void>(`${this.apiUrl}/${id}`)
    .toPromise()
    .then(() => {})
    .catch((error) => {
      console.error('An error occurred:', error);
      throw error;
    });
}


}
