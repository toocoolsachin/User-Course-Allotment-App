import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from './user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService]
})
export class AddUserComponent implements OnInit {
  user: User[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  userModel = new User('', '', '', '', '');

  onSubmit() {
    this.userService.addUser(this.userModel).subscribe(res => {
      this.user = res;
      console.log(`Successfully Added: ${res}`);
      this.router.navigate(['user/list']);
    });
  }
}
