import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { Course } from '../add-course/course-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css'],
  providers: [CourseService]
})
export class ListCourseComponent implements OnInit {
  courses: Course[];
  course: Course;
  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(res => {
      this.courses = res;
      console.log(res);
    });
  }

  onEdit(id: string) {
    this.courseService.editCourse(id).subscribe(res => {
      this.course = res;
      console.log(res);
      this.router.navigate(['course/edit', id]);
    });
  }

  onDelete(id: string) {
    this.courseService.deleteCourse(id).subscribe(res => {
      this.ngOnInit();
      console.log(res);
    });
  }
}
