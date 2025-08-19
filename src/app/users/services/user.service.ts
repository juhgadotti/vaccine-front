import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserView } from '../interfaces/user-view';
import { User } from '../interfaces/user';
import { VaccineApi } from '../../environments.ts/path';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  private urls = VaccineApi.urls;

  getUserViewList(): Observable<UserView[]> {
    return this.http.get<UserView[]>(this.urls.user.list);
  }  

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.urls.user.root}/${userId}`);
  }

  registerNewUser(user: User): Observable<User> {
    return this.http.post<User>(this.urls.user.root, user);
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.urls.user.root);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.urls.user.root}/${userId}`);
  }
}
