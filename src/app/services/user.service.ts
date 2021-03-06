import {User} from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  api_url = 'http://localhost:3000';
  userUrl = `${this.api_url}/api/users`;

  constructor(
    private http: HttpClient
  ) { }


  createUser(user: User): Observable<any> {
    console.log(user);
    return this.http.post(`${this.userUrl}`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.userUrl)
    .map(res  => {
      return res['data'].docs as User[];
    });
  }

  editUser(user: User) {
    const editUrl = `${this.userUrl}`;
    return this.http.put(editUrl, user);
  }

  deleteUser(id: string): any {
    const deleteUrl = `${this.userUrl}/${id}`;
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    });
  }

  findUserByUsername(username: string): any {
    const usernameUrl = `${this.userUrl}/${username}`;
    return this.http.get(usernameUrl)
    .map(res  => {
      return res['data'].docs as User[];
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
