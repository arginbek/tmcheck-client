import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {

  appointmenList: Appointment[];
  selectedAppointment: Appointment;
  constructor(private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.appointmentService.getEmptySessions().
      subscribe(sessions => {
        this.appointmenList = sessions;
        console.log(sessions);
      });
  }

  subscribe(appment: Appointment) {
    const user = JSON.parse(localStorage.getItem('token'));
    appment.customer = user.username;
    this.appointmentService.editAppointment(appment);
    this.router.navigate(['/']);
  }

}
