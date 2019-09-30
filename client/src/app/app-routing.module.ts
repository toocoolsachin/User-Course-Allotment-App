import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';


const routes: Routes = [
  { path: 'user/add', component: AddUserComponent },
  { path: 'user/edit/:id', component: EditUserComponent },
  { path: 'user/list', component: ListUserComponent },
  { path: '', redirectTo: '/user/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
