import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable } from 'rxjs';
import { Category } from 'src/models/Category';
import { CategoryPerEvent } from 'src/models/CategoryPerEvent';
import { RecognizedGuest } from 'src/models/RecognizedGuest';
import { ImageSnippet } from 'src/models/imageSnippet';
import { LogIn } from 'src/models/LogIn';
import { ImgDataUrl } from 'src/models/ImgDataUrl';


//--proxy-config src/proxy.config.json 
@Injectable({
  providedIn: 'root'
})
export class RecognitionService {
_categoryList!:Category[];
_imgObj!:ImgDataUrl;
  constructor(private http: HttpClient) {

  }
  sendImgToRecognition(eventId:number,img:any):Observable<RecognizedGuest>{
    this._imgObj={id:0, dataUrl:img._imageAsDataUrl}
    return this.http.post<any>("/api/FaceRecognition/"+eventId,this._imgObj)
     }
}