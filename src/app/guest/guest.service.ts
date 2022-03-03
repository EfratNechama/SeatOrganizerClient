import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from 'src/models/Guest';
//--proxy-config src/proxy.config.json 
@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) {

  }
  // getEvent(id: number): Observable<any> {
  //   return this.http.get<any>("api/Event/" + id);
  // }

getGuestListByEventId(eId:number):Observable<Guest[]>
{
  return this.http.get<Guest[]>("api/Guest/"+eId);
}

deleteGuest(gId:number):Observable<number>
{
  return this.http.delete<number>("api/Guest/"+gId);
}
}