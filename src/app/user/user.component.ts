import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http/src/response';
import {validationService} from '../services/validationService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'Available List of Users';
  createNew: boolean = false;
  editMode: boolean = false;
  public newUser: User;
  usersList: User[];
  editUsers: User[] = [];
  oldUser: User;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.usersList = users;
        console.log(users);
      });
  }


  create() {
    this.createNew = true;
    this.newUser = new User();
  }

  submitNewUser() {
    console.log(this.newUser)
    this.userService.createUser(this.newUser)
      .subscribe((res) => {
        this.usersList.push(res.data);
        console.log(res.data);
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Error is from Cliet --' + err.error.message);
          } else {
            console.log('Error is from server--' + err.message);
          }
        }
      });
  }

  editUser(user: User) {
    this.newUser = user;
  
    this.createNew = true;
    this.editMode = true;
    console.log(user);
    if (this.usersList.includes(user)) {
      if (!this.editUsers.includes(user)) {
        this.editUsers.push(user);
      } else {
        this.editUsers.splice(this.editUsers.indexOf(user), 1);
        this.userService.editUser(user).subscribe(res => {
          console.log('Update Succesful');
        }, err => {
          this.editUser(user);
          console.error('Update Unsuccesful');
        });
      }
    }
  }

  submitUser(user: User) {
    if (this.editMode) {
      this.editUser(user);
      this.editMode = false;
    }
    else {
      this.submitNewUser();
    }
    this.newUser = null;
    this.createNew = false;
  }

  initializeOldUser(user:User){
    this.oldUser = new User();
    this.oldUser._id = user._id;
    this.oldUser.firstname = user.firstname;
    this.oldUser.lastname = user.lastname;
    this.oldUser.email = user.email;
    this.oldUser.password = user.password;
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user._id).subscribe(res => {
      this.usersList.splice(this.usersList.indexOf(user), 1);
    });
  }

  cancel() {
    this.createNew = false;
    this.editMode = false;
    this.newUser = this.oldUser;
    if(this.editMode){
      this.submitUser(this.newUser);
    }
  }

}

