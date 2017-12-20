import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    api_url = 'http://localhost:3000';
    loginUrl = `${this.api_url}/api/signin`;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(this.loginUrl, { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    console.log(user);
                    localStorage.setItem('token', JSON.stringify(user));
                }
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }
}
