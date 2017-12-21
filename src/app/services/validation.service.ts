import { AbstractControl, ValidationErrors, Validators, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ValidationService {

    constructor(private userService: UserService,private http:HttpClient) {}

    cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    isUniqueByObservable(c: AbstractControl): Observable<ValidationErrors | null> {
        let users: User[];
        users = this.userService.findUserByUsername(c.value as string);
        return users.length > 0 ? Observable.of({ 'isUnique': false }) : Observable.of(null);
    }
}
