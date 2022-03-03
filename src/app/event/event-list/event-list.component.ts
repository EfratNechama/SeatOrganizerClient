import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/models/User';
import { EventService } from '../event.service';
import { Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { Event } from 'src/models/Event';
import { UserService } from 'src/app/user/user.service';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  

  constructor(private _eventService:EventService,private _activatedRoute:ActivatedRoute,private _userService:UserService,
    private _route:Router) { this._user= this._userService._user;
      console.log(this._user.userName);}

  @Input() 
  _user!:User;
  
_eventList!:Event[];

  @Output()
  getEvents:EventEmitter<any>=new EventEmitter();

  ngOnInit(): void {
   
   
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
    this._route.navigate(['/event-details']);
  }

  viewGuest(e:Event)
  {
    sessionStorage.setItem("event",(e.id).toString());
   this._route.navigate(['/guest-list']);
  }

  deleteEvent(e:Event)
  {
    this._eventService.deleteEvent(e.id).subscribe(succ=>{alert("delete succ")},err=>{alert("delete failed")});
    this.ngOnInit();
    
  }
 

  

}
