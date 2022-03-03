import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogIn } from 'src/models/LogIn';
import { User } from 'src/models/User';
//--proxy-config src/proxy.config.json 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  _user!:User;
  createNewUser(u: User): Observable<User> {
    return this.http.post<User>("api/User/" , u);
  }

  getUserByEmailAndPassword(user:LogIn): Observable<User> {

    return this.http.post<User>("api/LogIn/" , user );
  }

}