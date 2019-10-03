import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { Course } from './course-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courses: Course[];
  courseModel = new Course('', '', '', '');
  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.courseService.addCourse(this.courseModel).subscribe(res => {
      this.courses = res;
      this.router.navigate(['course/list']);
      console.log(res);
    });
  }
}
