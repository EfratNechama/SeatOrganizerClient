import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogIn } from 'src/models/LogIn';
import { User } from 'src/models/User';
//--proxy-config src/proxy.config.json 
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

  }
 

}