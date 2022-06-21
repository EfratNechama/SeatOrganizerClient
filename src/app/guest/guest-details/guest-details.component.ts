import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { Guest } from 'src/models/Guest';
import { GuestService } from '../guest.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/models/Category';
//import { stringify } from 'querystring';

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
this.loadCategoryByEventId();
  }

_categoryName!:string;
_categoryByEventId!:Category[];
  _guest!: Guest;
loadCategoryByEventId()
{
this._guestService.getCategoryByEventId((Number)(sessionStorage.getItem("event"))).subscribe(
  succ=>{ console.log("get category succuss :) ");
  this._categoryByEventId=succ;
  console.log(succ);
},
err=>{
  console.log("get category failed");
}
)
}
// this._eventService.getEventListByUserId(this._user.id).subscribe(
//   succ => {
//     console.log("get event succuss :) ");
//     this._eventList = succ;
//     console.log(succ);
//   },
//   err => { console.log("get event failed :) "); }
// )

  guestDetailsForm: FormGroup = new FormGroup({
    "id": new FormControl(0),
    "eventId": new FormControl((Number)(sessionStorage.getItem("event"))),
    "firstName": new FormControl(null, Validators.required),
    "lastName": new FormControl(null, Validators.required),
    "phone": new FormControl(null),
    "email": new FormControl(null, [Validators.email, Validators.required]),
    "confirmed": new FormControl(false),
    //צריך עיון
    "categoryId": new FormControl(0),
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
   // this._guest.categoryId = this._categoryByEventId.filter(c =>{ debugger;c.name == this.guestDetailsForm.controls["category"].value})[0].id;
    this._guestService.postGuest(this._guest, false).subscribe(succ => { console.log(this._guest) ;this.dialogRef.close();}, err => { console.log("error") })
    

  }
  saveAndSend() {
    this.guestDetailsForm.patchValue({

    });
   
    var x= document.getElementsByName("category")[0] as HTMLInputElement;
    // debugger;
  //  this._categoryName=stringify(cat);
    this._guest = this.guestDetailsForm.value;
    this._guestService.postGuest(this._guest, true).subscribe(succ => { console.log(this._guest, 'send') })
    this.dialogRef.close();

  }
}


