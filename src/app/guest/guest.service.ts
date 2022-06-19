import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable } from 'rxjs';
import { Category } from 'src/models/Category';
import { Guest } from 'src/models/Guest';
import { ImageSnippet } from 'src/models/imageSnippet';
import { LogIn } from 'src/models/LogIn';


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
  sendEmailToGuest(g: Guest): Observable<Guest> {
    console.log("sendEmailToGuest");
    debugger;
    return this.http.put<Guest>("api/Guest/sendEmail/",g);

  }
  getGuestListByEventId(eId: number): Observable<Guest[]> {
    return this.http.get<Guest[]>("api/Guest/all/" + eId);
  }

  postGuest(g: Guest, send: boolean): Observable<any> {
    //debugger;
    return this.http.post<any>("api/Guest/" + send, g);
  }
  getCategoryByEventId(id: number): Observable<any> {
    return this.http.get<Category[]>("api/Category/" + id);
  }
  deleteGuest(gId: number): Observable<any> {
    return this.http.delete<number>("api/Guest/" + gId);
  }




  ///for confirmation
  getGuestByGuestId(gId:number):Observable<Guest>{
    return this.http.get<Guest>("api/Guest/one/" + gId)
  }
 putGuestAfterConfirm(g:Guest,img:any):Observable<Guest>{
//  const formData = new FormData();
 g.dataUrl=img._imageAsDataUrl;
 return this.http.put<Guest>("api/Guest/"+g.id,g)
  // formData.append('image', guestImg.imageAsBase64);




// let image:GuestImage={ 
//   guestId:g.id.toString(),
//   dataUrl:guestImg._imageAsDataUrl,
//   eventId:g.eventId
// }

//  
// }
 }
}