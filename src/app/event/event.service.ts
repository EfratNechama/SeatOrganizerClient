import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { User } from 'src/models/User';
import { Event } from 'src/models/Event'
import { Category } from 'src/models/Category';
import { ImageSnippet } from 'src/models/imageSnippet';

//--proxy-config src/proxy.config.json 
@Injectable({
  providedIn: 'root'
})
export class EventService {
  _prefix!: string;
  _reloadFlag!: BehaviorSubject<boolean>;
  _reloadFlag$!: Observable<boolean>;
  constructor(private http: HttpClient) {
   // this._prefix = baseUrl + 'api/Event/';
    this._reloadFlag = new BehaviorSubject<boolean>(false);
    this._reloadFlag$ = this._reloadFlag.asObservable();
  }
  // getEvent(id: number): Observable<any> {
  //   return this.http.get<any>("api/Event/" + id);
  // }
  // sendEmailToGuest(g: Guest): Observable<Guest> {
  //   console.log("sendEmailToGuest");
  //   debugger;
  //   return this.http.put<Guest>("api/Guest/", g);

  // }

  getEventListByUserId(i?: number): Observable<Event[]> {


    return this.http.get<Event[]>("/api/Event/User/" + i);

  }

  getGeneralCategory(): Observable<Category[]> {

    return this.http.get<Category[]>("/api/Category/");
  }

 
  



  postImage(_imageSrc: ImageSnippet,eId?:number)
{
  const formData = new FormData();
  formData.append('image', _imageSrc.file);
  return this.http.post<number>("/api/Event/image/" + eId ,formData);
}
postEvent(e:Event,uId?:number):Observable<number> {
  return   this.http.post<number>("/api/Event/"+ uId ,e );
 
}
  
  postCategory(c: Category[]): Observable<any> {

    return this.http.post<any>("/api/Category/", c);
  }


  deleteEvent(eId: number): Observable<any> {
    return this.http.delete<any>("/api/Event/" + eId);
  }

  setReloadFlag(flag: boolean) {
    this._reloadFlag.next(flag);
  }
getEventbyEventId(eId?:number):Observable<Event>{
  return this.http.get<Event>("/api/Event/" + eId);
}

calcPlace(e?:Event):Observable<any>{
  return this.http.post<any>("/api/Placement/" ,e);
}






  // getImagesForUser(): Observable<UserImageModel[]> {
  //   let userId = 1; // get the user id from user service

  //   let searchParams: URLSearchParams = new URLSearchParams();
  //   searchParams.set('userId', userId.toString());
  //   return this.http.get<UserImageModel[]>(this.prefix + 'GetImagesForUser?' + searchParams);
  // }
}
