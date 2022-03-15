import { Component } from '@angular/core';
import { CourseService } from './course/course.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ 'Title: ' + getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;

  constructor(service: CourseService){
    // let service = new CourseService();
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  //Logic for calling an HTTP service
}
