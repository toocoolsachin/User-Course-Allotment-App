import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { ListCourseComponent } from './components/list-course/list-course.component';

const routes: Routes = [
  { path: 'user/add', component: AddUserComponent },
  { path: 'user/edit/:id', component: EditUserComponent },
  { path: 'user/list', component: ListUserComponent },
  { path: 'course/add', component: AddCourseComponent },
  { path: 'course/edit/:id', component: EditCourseComponent },
  { path: 'course/list', component: ListCourseComponent },
  { path: '', redirectTo: '/user/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
