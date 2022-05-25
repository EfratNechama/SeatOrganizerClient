import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { GuestSeat } from 'src/models/GuestSeat';
import { Event } from 'src/models/Event';
import { GuestSeatService } from '../placement.service';


@Component({
  selector: 'app-display-placement',
  templateUrl: './display-placement.component.html',
  styleUrls: ['./display-placement.component.scss']
})
export class DisplayPlacementComponent implements OnInit {

  constructor(private _guestSeatService: GuestSeatService ) {  }
  _event?: Event;
  _guestSeatList: GuestSeat[] = [];
  _myTableIds?: any;
  _filterGuest: GuestSeat[] = [];
  displayedColumns: string[] = ['firstName', 'numMembersInTable', 'category'];
  // _firstTableId:number;

  ngOnInit(): void {
    this.loadDisplay();
  }


  async loadDisplay() {

    this._event = JSON.parse(sessionStorage.getItem("event")!);
    
    this._guestSeatService.getGuestSeatList(JSON.parse(sessionStorage.getItem("event")!).id).subscribe(succ => { this._guestSeatList = succ; console.log(succ);
           this._myTableIds=new Set(this._guestSeatList.map(g=>g.tableId));

           
    })
    
    // this._myTableIds=this._guestSeatList.map(g=>g.tableId);
    
  }
  filterGuest(t:number){
    // console.log(t);
    this._filterGuest=this._guestSeatList.filter(g=>g.tableId==t);
    // console.log(this._filterGuest);
  }

}
