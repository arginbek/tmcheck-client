import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';
import { Appointment } from '../models/appointment.model';

@Injectable()
export class AppointmentService {

    api_url = 'http://localhost:3000';
    appUrl = `${this.api_url}/api/appointments`;

    constructor(
        private http: HttpClient
    ) { }

    getEmptySessions(): Observable<Appointment[]> {
        const url = `${this.appUrl}/free`;
        console.log('free url: ' + url);
        return this.http.get(url)
            .map(res => {
                return res['data'].docs as Appointment[];
            });
    }

    getUserAppointments(): Observable<Appointment[]> {
        const user = JSON.parse(localStorage.getItem('token'));
        const url = `${this.appUrl}/${user.username}`;
        return this.http.get(url)
            .map(res => {
                return res['data'].docs as Appointment[];
            });
    }

    editAppointment(appment: Appointment) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const editUrl = `${this.appUrl}`;
        console.log(editUrl);
        this.http.put(editUrl, appment, {headers}).subscribe(
            val => {
                console.log('PUT call successful value returned in body', val);
            },
            response => {
                console.log('PUT call in error', response);
            },
            () => {
                console.log('The PUT observable is now completed.');
            }
        );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
