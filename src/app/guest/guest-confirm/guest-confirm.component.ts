import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/models/Guest';
import { Event } from 'src/models/Event';
import { GuestService } from '../guest.service';
import { EventService } from 'src/app/event/event.service';
import { MaterialModule } from 'src/app/material/material.module';
import { FormControl, FormGroup } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-guest-confirm',
  templateUrl: './guest-confirm.component.html',
  styleUrls: ['./guest-confirm.component.scss']
})
export class GuestConfirmComponent implements OnInit {

  

  constructor(private _route: Router, private _activatedRoute: ActivatedRoute,
    private _guestService: GuestService,private _eventService:EventService) { 
     this._activatedRoute.queryParams.subscribe(
        params => this._guestId=params['id']);
    }
  // latest snapshot
  public webcamImage?: WebcamImage;
  handleImage(webcamImage: WebcamImage) {
  this.webcamImage = webcamImage;
  
  
  
  }
  //צריך לקבל מהלינק
  _guestId!:number;
  _guest!:Guest;
  _event!:Event;
  _flag!:boolean;
  _imComming:boolean=true;
  _afterSubmit:boolean=false;
  _openCamera:boolean=false;
  _guestImg!:WebcamImage;
  ngOnInit(): void {
    this._guestService.getGuestByGuestId(this._guestId).subscribe(succ=>{this._guest=succ;
    this._eventService.getEventbyEventId(this._guest.eventId).subscribe(s=>{this._event=s,console.log(s),this._flag=true})}
    );

  }
openCamera(){
  this._openCamera=!this._openCamera;
}
  imComming(){
this._imComming=!this._imComming;
  }
  submit(){
  
  

    //  this._guest.numFamilyMembersMale
      this._guest.confirmed=true;
      this._guest.numFamilyMembersMale=(Number)((<HTMLInputElement>document.getElementById("numMale")).value);

      if(this._event.separatedSeats)
      {
        this._guest.numFamilyMembersFemale=(Number)((<HTMLInputElement>document.getElementById("numFemale")).value);
      }
    
      this._guestImg=JSON.parse(sessionStorage.getItem("guestImg")!);
      console.log(this._guestImg);
     this._guestService.putGuestAfterConfirm(this._guest,this._guestImg).subscribe(succ=>{console.log(succ,this._afterSubmit=true)})
     
  

  
 
  }

}
