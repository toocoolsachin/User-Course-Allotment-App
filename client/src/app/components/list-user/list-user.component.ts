import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../add-user/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  providers: [UserService]
})
export class ListUserComponent implements OnInit {
  users: any = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.listUsers().subscribe((res) => {
      this.users = res;
      console.log(res);
    });
  }

  onEdit(id: String) {
    this.userService.editUser(id).subscribe(res => {
      this.users = res;
      console.log(res);
      this.router.navigate(['user/edit', id]);
    })
  }

  onDelete(id: String) {
    this.userService.deleteUser(id).subscribe(res => {
      this.users = res;
      this.ngOnInit();
      console.log(res);
    });
  }
}
