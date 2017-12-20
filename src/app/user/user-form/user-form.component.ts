import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { validationService } from '../../services/validationService';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output()
  cancelUser = new EventEmitter<User>();

  @Output()
  submitUser = new EventEmitter<User>();

  @Input()
  user: User;

  userForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required], [this.validationService.isUniqueByObservable]),
    email: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private validationService: validationService) { }

  ngOnInit() {
  }

  get firstname() {
    return this.userForm.get('firstname');
  }

  get lastname() {
    return this.userForm.get('lastname');
  }

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }

  get role() {
    return this.userForm.get('role');
  }

  get password() {
    return this.userForm.get('password');
  }

  submit() {
    this.submitUser.emit(this.user);
  }

  cancel() {
    this.cancelUser.emit(this.user);
  }

}
