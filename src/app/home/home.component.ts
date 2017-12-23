import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role: String = '';
  username: String = '';

  constructor() { }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('token'));
    if (currentUser) {
      this.role = currentUser.role;
      this.username = currentUser.username;
    }
  }

  isAdmin() {
    return this.role === 'ADMIN';
  }

  isCustomer() {
    return this.role === 'CUSTOMER';
  }

  isCounselor() {
    return this.role === 'COUNSELOR';
  }

}
