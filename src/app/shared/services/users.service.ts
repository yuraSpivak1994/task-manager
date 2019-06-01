import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {Observable} from 'rxjs';



@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .map((response: Response) => response)
      .map((user) => user[0] ? user[0] : undefined);
  }
  createNewUser(user): Observable<any> {
    return this.http.post(`http://localhost:3000/users`, user)
      .map((response: Response) => response);
  }
}
