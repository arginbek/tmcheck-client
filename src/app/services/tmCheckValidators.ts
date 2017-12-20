import { AbstractControl, ValidationErrors,Validators, AsyncValidatorFn  } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class TmCheckValidators {

    constructor(private userService:UserService){}

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    static isUniqueByObservable(c: AbstractControl): Observable<ValidationErrors | null> {
        return (c.value as string) === 'P123' ?  Observable.of({ 'isUnique': false }) : Observable.of(null);
    }
}
