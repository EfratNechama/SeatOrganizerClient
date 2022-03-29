import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/models/User';
import { EventService } from '../event.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Event } from 'src/models/Event';
import { UserService } from 'src/app/user/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventDetailsComponent } from '../event-details/event-details.component';
// import { loadavg } from 'os';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {


  constructor(private _eventService: EventService, private _activatedRoute: ActivatedRoute, private _userService: UserService,
    public dialog: MatDialog,
    private _route: Router) {
    this._user = this._userService._user;
    console.log(this._user.userName);
  }

  @Input()
  _user!: User;

  _eventList!: Event[];



  @Output()
  getEvents: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  this.loadMyData();
  }

  loadMyData(){
    this.getEvents.emit(this._user.id);
    this._eventService.getEventListByUserId(this._user.id).subscribe(
      succ => {
        console.log("get event succuss :) ");
        this._eventList = succ;
        console.log(succ);
      },
      err => { console.log("get event failed :) "); }
    )
  }
  
  newEvent() {

    const dialogRef = this.dialog.open(EventDetailsComponent, {
      height: '70%',
      width: '25%',
    });

    dialogRef.afterClosed().subscribe(result => {
    
      console.log('The dialog was closed');
     
      this.loadMyData();
      

    });
  }
  //this._route.navigate(['/event-details']);


  viewGuest(e: Event) {
    sessionStorage.setItem("event", (e.id).toString());
    this._route.navigate(['/guest-list']);
  }

  deleteEvent(e: Event) {
    this._eventService.deleteEvent(e.id).subscribe(succ => { console.log("delete succ") ;this.loadMyData();}, err => { console.log("delete failed") });
 

  }




}
