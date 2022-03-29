import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/models/Guest';
import { GuestDetailsComponent } from '../guest-details/guest-details.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  constructor(private _route: Router, private _activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private _guestService: GuestService) { }

  ngOnInit(): void {
    this.loadGuestList();

  }
  _guestList: Guest[] = [];
  _show: boolean = false;
  loadGuestList() {

    this._guestService.getGuestListByEventId((Number)(sessionStorage.getItem("event"))).subscribe(succ => { this._guestList = succ }, err => { alert("failed") });

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
  sendEmail(g: Guest) {
    console.log("send email button");
    this._guestService.sendEmailToGuest(g).subscribe(
      result => {
        console.log("afterSendEmailToGuest2");
      }
    );
    //postGuest(g,true);
  }
}