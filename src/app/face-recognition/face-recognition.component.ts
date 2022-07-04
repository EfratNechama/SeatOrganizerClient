import { Component, OnInit } from '@angular/core';
import { EventService } from '../event/event.service';
import { Event } from 'src/models/Event';
import { MaterialModule } from 'src/app/material/material.module';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { WebcamImage } from 'ngx-webcam';
@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.scss']
})
export class FaceRecognitionComponent implements OnInit {
  _openCamera:boolean=true;
  _event!:Event;
  _eventId?:number;
  _fromReco:boolean=true;
  constructor(private _eventService:EventService) { }
  
  
  webcamImage?: WebcamImage;
  handleImage(webcamImage: WebcamImage) {
  this.webcamImage = webcamImage;
  }

  ngOnInit(): void {
// this._eventId=(Number)(sessionStorage.getItem("event"));
this._event = JSON.parse(sessionStorage.getItem("event")!);
// this._flag=true;
// this._eventService.getEventbyEventId(this._eventId).subscribe(succ=>{this._event=succ, this._flag=true});
  }
  openCamera(){
    // this._openCamera=!this._openCamera;
  }
}
