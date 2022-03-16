import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';
import { Event } from 'src/models/Event';
import { Category } from 'src/models/Category';
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
      debugger;
     }

     getGeneralCategory():Observable<Category[]> {
     
      return this.http.get<Category[]>("/api/Category/");
     }

     postEvent(e?:Event, uId?:number):Observable<number>
     {
      return this.http.post<number>("/api/Event/" + uId+"/",e);
     }
     postCategory(c:Category[]):Observable<any>
     {
      return this.http.post<any>("/api/Category/" ,c);
     }

     deleteEvent(eId:number):Observable<any>{
       return this.http.delete<any>("/api/Event/" + eId);
     }
}
