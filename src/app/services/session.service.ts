import {Appointment} from '../models/appointment.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class SessionService {

  api_url = 'http://localhost:3000';
  sessionUrl = `${this.api_url}/api/appointments`;

  constructor(
    private http: HttpClient
  ) { }


  createSession(appointment: Appointment): Observable<any> {
    console.log(appointment);
    return this.http.post(`${this.sessionUrl}`, appointment);
  }
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
