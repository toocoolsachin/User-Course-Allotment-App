import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../add-user/user-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any = {};
  newUser: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userService.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }

  onUpdate(updateUser: User) {
    this.activatedRoute.params.subscribe(params => {
      this.userService.updateUser(updateUser, params['id']).subscribe(res => {
        this.newUser = res;
        console.log(`Updated: ${res}`);
      });
    });
    this.ngOnInit();
    this.router.navigate(['/user/list']);
  }
}
