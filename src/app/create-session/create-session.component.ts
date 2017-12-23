import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { AlertService } from '../services/alert.service';
import { Appointment } from '../models/appointment.model';
declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-create-session',
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css']
})


export class CreateSessionComponent implements OnInit {

    model: Appointment;
    loading = false;
    app = {};
    shour = 0;
    smin;

    constructor(
        private router: Router,
        private sessionService: SessionService,
        private alertService: AlertService) { }

    saveApp() {
        this.loading = true;
        const user = JSON.parse(localStorage.getItem('token'));
        this.model.counselor = user.username;
        this.model.startTime = this.shour + ':' + this.smin;
        this.sessionService.createSession(this.model)
            .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

    ngOnInit() {
        this.model = new Appointment();

    }

}
