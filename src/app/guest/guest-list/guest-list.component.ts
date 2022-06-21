import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/models/Guest';
import { GuestDetailsComponent } from '../guest-details/guest-details.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GuestService } from '../guest.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/models/Category';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  constructor(private _route: Router, private _activatedRoute: ActivatedRoute,
    public dialog: MatDialog,private _snackBar: MatSnackBar,
    private _guestService: GuestService) { }

  ngOnInit(): void {
   
    this.loadGuestList();
    this._eventId=(Number)(sessionStorage.getItem("event"));
  }
  _guestList: Guest[] = [];
  _show: boolean = false;
  _categoryList:Category[]=[];
  _eventId!:Number;
  loadGuestList() {

    this._guestService.getGuestListByEventId((Number)(sessionStorage.getItem("event"))).subscribe(succ => { this._guestList = succ });
    this._guestService.getCategoryByEventId((Number)(sessionStorage.getItem("event"))).subscribe(succ=>{this._categoryList=succ});
  }

  newGuest() {
    // this._show = !this._show
    const dialogRef = this.dialog.open(GuestDetailsComponent, {
      height: '60%',
      width: '20%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadGuestList();

    });
  }

  deleteGuest(g: Guest) {
    this._guestService.deleteGuest(g.id).subscribe(succ => { alert("delete succ"); this.loadGuestList(); }, err => { alert("delete failed") });


  }
  sendEmailToAllGuests(eventId:Number)
  {
    this._guestService.sendEmailToAllGuests(eventId).subscribe(succ=>(console.log("send email to all worked!")));
  }
  sendEmail(g: Guest) {
    console.log("send email button");
    this._guestService.sendEmailToGuest(g).subscribe(
      result => {
        console.log("afterSendEmailToGuest2");




        this._snackBar.open('Email sent successfuly', '✔',{duration:4000,  verticalPosition: 'top',  panelClass: ['success']});


        
      }
    );
    //postGuest(g,true);
  }
}





// @Component({
//   selector: 'app-guest-list-snack',
//   templateUrl: './guest-list-snack.component.html',
//   styles: [
//     `
//     .successSnack {
//       color: hotpink;
//     }
//   `,
//   ],
// })
// export class sentSuccessfullyComponent {}
