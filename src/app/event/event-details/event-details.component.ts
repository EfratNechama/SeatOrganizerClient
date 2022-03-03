import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { EventService } from '../event.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { User } from 'src/models/User';
import { Event } from 'src/models/Event';
import { Category } from 'src/models/Category';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  constructor(private _eventService: EventService, private _activatedRoute: ActivatedRoute, private _userService: UserService,
    private _route: Router) { }
  @Input()
  _user!: User;



  @Output()
  onCreateEvent: EventEmitter<Event> = new EventEmitter();


  //_seperatedFlag: boolean = false;
  _generalCategory: Category[] = [];
  _personalCategory: string[] = []
  _sendCategory: Category[] = [];
 
  _event!: Event;
  _eventId!: number;



  ngOnInit(): void {

    this._user = this._userService._user;
    console.log(this._user);
    
  }
  _seperated: boolean = false;
  _noSeperate: boolean = false;
  _speciale:boolean=false;

  eventDetailsForm: FormGroup = new FormGroup({
    "id": new FormControl(0),
    "seperatedSeats": new FormControl(false),
    "numTablesMale": new FormControl(0),
    "numTablesFemale": new FormControl(0),
    "numChairsMale": new FormControl(0),
    "numChairsFemale": new FormControl(0),
    "numSpecialTableChairsMale": new FormControl(0),
    "numSpecialTableChairsFemale": new FormControl(0),
    "invitationImage": new FormControl(null),
    "eventDate": new FormControl(Date.now)
    //"generalCatgory":new FormControl(Date.now)

  })

  categoryGroup: FormGroup = new FormGroup({
    "name": new FormControl()
  })

  saveNewEvent() {
    this._event = this.eventDetailsForm.value;
    this._eventService.postEvent(this._event, this._user.id).subscribe(succ => {
      this._eventId = succ;
      console.log(this._eventId);
      this._generalCategory.forEach(a => { var x = document.getElementsByName(a.name)[0] as HTMLInputElement; if (x.checked) this._personalCategory.push(a.name) });



      this._personalCategory.forEach(el => {
        this._sendCategory.push(new Category(0, el, this._eventId));

      });
      this._eventService.postCategory(this._sendCategory).subscribe(succ => {
        alert("post category succesed!");
        this._route.navigate(['/event-list'])
      }, err => { alert("post category failed!") })

    }, err => { alert("error") });

  }




  selectCaregory() {
    this._eventService.getGeneralCategory().subscribe(succ => {
      this._generalCategory = succ;
      console.log(this._generalCategory)
    }, err => { alert("can't get category :( ") }
    )
  }
  addPersonalCategory(c: string) {
    this._personalCategory.push(c);
    console.log(this._personalCategory)
  }

  addGeneralCategory(c: string, f: boolean) {
    if (f) {
      console.log("exist");
    }
    else {
      this._personalCategory.push(c);
      console.log(this._personalCategory);
    }
    if (this._personalCategory.includes(c)) {
      console.log("exist");
    }
    else {
      this._personalCategory.push(c);
      console.log(this._personalCategory);


    }

  }

  noSeperated() {
    this._noSeperate = !this._noSeperate;
    this._speciale=false;
    if(this._seperated)
    {
      this._seperated = !this._seperated;
    }
   
  }
  seperated() {
    this._seperated = !this._seperated;
    this._speciale=false;
    if(this._noSeperate)
    {
      this._noSeperate = !this._noSeperate;

    }
  }

  wantSpeciale()
  {
this._speciale=!this._speciale;
  }

  //  <HTMLScriptElement[]><any>document.getElementsByName(id))[0];

  // this._generalCategory.forEach(a => { var x= document.getElementsByName(a.name)[0] as HTMLInputElement;if(x.checked) this._personalCategory.push(a.name) });

}