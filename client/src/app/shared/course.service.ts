import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../components/add-course/course-model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url = 'http://localhost:3000/api/courses';

  constructor(private http: HttpClient) {}

  addCourse(course: Course) {
    return this.http.post<Course[]>(`${this.url}`, course);
  }

  getCourses() {
    return this.http.get<Course[]>(`${this.url}`);
  }

  editCourse(id) {
    return this.http.get<Course>(`${this.url}/edit/${id}`);
  }

  updateCourse(course: Course, id: string) {
    return this.http.post<Course>(`${this.url}/update/${id}`, course);
  }

  deleteCourse(id) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
