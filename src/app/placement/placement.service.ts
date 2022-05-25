import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuestSeat } from 'src/models/GuestSeat';


//--proxy-config src/proxy.config.json 
@Injectable({
  providedIn: 'root'
})
export class GuestSeatService {

  constructor(private http: HttpClient) {

  }
getGuestSeatList(eId?:number):Observable<any>{
    return this.http.get<GuestSeat[]>("api/Placement/"+ eId)
  }


}