import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { Guest } from 'src/models/Guest';
import { GuestService } from '../guest.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.scss']
})
export class GuestDetailsComponent implements OnInit {

  constructor(private _guestService: GuestService, private _userService: UserService,
    public dialogRef: MatDialogRef<GuestDetailsComponent>,
    ) { }
    onNoClick(): void {
      this.dialogRef.close();
    }

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
    "categotyId": new FormControl(13),
    "userId": new FormControl(this._userService._user.id),
    "identifyName": new FormControl(null),
    "identifyImage": new FormControl(null),
    "numFamilyMembersMale": new FormControl(0),
    "numFamilyMembersFemale": new FormControl(0)


  })
 // _show: boolean = false;
  // addNewguest() {
  //   this._guest = this.guestDetailsForm.value;
  // }
  saveWithoutSending() {
    this._guest = this.guestDetailsForm.value;
    this._guestService.postGuest(this._guest, false).subscribe(succ => { console.log(this._guest) }, err => { console.log("error") })
    this.dialogRef.close();

  }
  saveAndSend() {
    this._guest = this.guestDetailsForm.value;
    this._guestService.postGuest(this._guest, true).subscribe(succ => { console.log(this._guest, 'send') }, err => { console.log("error") })
    this.dialogRef.close();

  }
}


