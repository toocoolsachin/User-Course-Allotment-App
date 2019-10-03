import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../add-user/user-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ListUserComponent } from '../list-user/list-user.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [ListUserComponent]
})
export class EditUserComponent implements OnInit {
  user: any = {};
  newUser: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private location: Location,
    private listUser: ListUserComponent
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userService.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }

  onUpdate(user: User, id: string) {
    this.activatedRoute.params.subscribe(params => {
      this.userService.updateUser(user, params['id']).subscribe(res => {
        this.newUser = res;
        // this.listUser.ngOnInit();
        console.log(res);
      });
    });
    window.location.href = '/user/list';
    // this.router.navigate(['/user/list']);
  }
}
