import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../add-course/course-model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: any = {};
  updatedCourse: Course;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.courseService.editCourse(params['id']).subscribe(res => {
        this.course = res;
      });
    });
  }

  onUpdate(course: Course, id: string) {
    this.activatedRoute.params.subscribe(params => {
      this.courseService.updateCourse(course, params['id']).subscribe(res => {
        this.updatedCourse = res;
        console.log(res);
      });
      window.location.href = '/course/list';
      // this.router.navigate(['/course/list']);
    });
  }
}
