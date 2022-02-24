import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/models/User';
import { EventService } from '../event.service';
import { Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { Event } from 'src/models/Event';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor(private _eventService:EventService,private _activatedRoute:ActivatedRoute,
    private _route:Router) { }

  @Input()
  _user!:User;
  
_eventList!:Event[];

  @Output()
  getEvents:EventEmitter<any>=new EventEmitter();

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((p:Params)=>{this._user=p})
    console.log(this._user.userName);
    this.getEvents.emit(this._user.id);
    this._eventService.getEventListByUserId(this._user.id).subscribe(
      succ=>{alert("get event succuss :) ");
      this._eventList=succ;
      console.log(succ);
      

    },
    err=>{alert("get event failed :) ");}
    )
  }

  newEvent()
  {
    this._route.navigate(['/event-details',this._user]);
  }




 

  

}
