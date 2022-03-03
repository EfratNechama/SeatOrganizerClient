import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Guest } from 'src/models/Guest';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.scss']
})
export class GuestDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  _guest!: Guest;

  guestDetailsForm: FormGroup = new FormGroup({
    "id": new FormControl(0),
    "eventId": new FormControl((Number)(sessionStorage.getItem("event"))),
    "firstName": new FormControl(null, Validators.required),
    "lastName": new FormControl(null, Validators.required),
    "phone": new FormControl(null),
    "email": new FormControl(null, [Validators.email, Validators.required]),
    "confirmed": new FormControl(false),
    //צריך עיון
    "categotyId": new FormControl(0),
    "identifyName": new FormControl(null),
    "identifyImage": new FormControl(null),
    "numFamilyMembersMale": new FormControl(0),
    "numFamilyMembersFemale": new FormControl(0)


  })
  _show: boolean = false;
  addNewguest() {
    this._guest = this.guestDetailsForm.value;
  }
  saveAndNotSend() {

  }
  saveAndSend() {

  }
}


