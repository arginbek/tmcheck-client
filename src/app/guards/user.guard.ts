import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currUser = localStorage.getItem('token');
    if (currUser && JSON.parse(currUser).role === 'ADMIN') {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/']);
    return false;
  }
}
