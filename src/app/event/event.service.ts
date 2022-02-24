import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';
import { Event } from 'src/models/Event';
//--proxy-config src/proxy.config.json 
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {

  }
  // getEvent(id: number): Observable<any> {
  //   return this.http.get<any>("api/Event/" + id);
  // }

  getEventListByUserId(i?:number): Observable<Event[]> {
     
      return this.http.get<Event[]>("/api/Event/User/"+ i);
     }
}
