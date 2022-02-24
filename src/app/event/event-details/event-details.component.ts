import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router,ActivatedRoute,ParamMap,Params } from '@angular/router';
import { User } from 'src/models/User';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  constructor(private eventService: EventService,private _activatedRoute:ActivatedRoute,
    private _route:Router) { }

  _user!:User;
  _seperatedFlag:boolean=false
  ngOnInit(): void {
    // debugger
    // this.eventService.getEvent(5).subscribe(data => {
    //   debugger
    //   alert(data);
    // })

    this._activatedRoute.params.subscribe((p:Params)=>{this._user=p})
  }

  eventDetailsForm:FormGroup=new FormGroup({

  })

  seperated()
  { this._seperatedFlag=true;}
}
