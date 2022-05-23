import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-display-placement',
  templateUrl: './display-placement.component.html',
  styleUrls: ['./display-placement.component.scss']
})
export class DisplayPlacementComponent implements OnInit {

  constructor() { }
_event?:Event;
  ngOnInit(): void {
    this.loadDisplay();
  }

  loadDisplay() {
 
this._event=JSON.parse(sessionStorage.getItem("event")!);
console.log(this._event);
    // this._guestService.getGuestListByEventId((Number)(sessionStorage.getItem("event"))).subscribe(succ => { this._guestList = succ });

  }

}
