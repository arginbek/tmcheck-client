import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-user-appointments',
  templateUrl: './user-appointments.component.html',
  styleUrls: ['./user-appointments.component.css']
})
export class UserAppointmentsComponent implements OnInit {

  appointmenList: Appointment[];
  selectedAppointment: Appointment;
  constructor(private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.appointmentService.getUserAppointments().
      subscribe(sessions => {
        this.appointmenList = sessions;
        console.log(sessions);
      });
  }

}
