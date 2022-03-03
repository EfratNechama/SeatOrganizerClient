import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/models/Guest';
import { GuestDetailsComponent } from '../guest-details/guest-details.component';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  constructor(private _route: Router, private _activatedRoute: ActivatedRoute, private _guestService: GuestService) { }

  ngOnInit(): void {
    this._guestService.getGuestListByEventId((Number)(sessionStorage.getItem("event"))).subscribe(succ => { this._guestList = succ }, err => { alert("failed") });



  }
  _guestList: Guest[] = [];
  _show: boolean = false;


  newGuest() {
    this._show = !this._show
  }

  deleteGuest(g:Guest)
  {
    this._guestService.deleteGuest(g.id).subscribe(succ=>{alert("delete succ")},err=>{alert("delete failed")});
    this.ngOnInit();
    
  }
}