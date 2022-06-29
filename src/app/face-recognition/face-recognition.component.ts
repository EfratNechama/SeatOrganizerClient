import { Component, OnInit } from '@angular/core';
import { EventService } from '../event/event.service';
import { Event } from 'src/models/Event';
import { MaterialModule } from 'src/app/material/material.module';
@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.scss']
})
export class FaceRecognitionComponent implements OnInit {

  _event!:Event;
  _eventId?:number;
  _flag:boolean=false;
  constructor(private _eventService:EventService) { }

  ngOnInit(): void {
this._eventId=(Number)(sessionStorage.getItem("event"));
this._eventService.getEventbyEventId(this._eventId).subscribe(succ=>{this._event=succ, this._flag=true});
  }

}
