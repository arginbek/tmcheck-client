import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './directives/alert/alert.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserGuard } from './guards/user.guard';
import { RegisterComponent } from './register/register.component';
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { ValidationService } from './services/validation.service';
import { AppointmentService } from './services/appointment.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'createsession',
    component: CreateSessionComponent, canActivate: [AuthGuard]
  },
  {
    path: 'makeappointment',
    component: MakeAppointmentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'myappoitments',
    component: UserAppointmentsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UserComponent, canActivate: [UserGuard],
    data: { title: 'Users List' }
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users/add',
    component: UserFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    UserFormComponent,
    RegisterComponent,
    UserAppointmentsComponent,
    MakeAppointmentComponent,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthGuard, AuthenticationService, AlertService, UserGuard, AuthenticationService,
    AlertService, ValidationService, AppointmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
