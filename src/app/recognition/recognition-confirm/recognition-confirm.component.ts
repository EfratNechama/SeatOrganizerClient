import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recognition-confirm',
  templateUrl: './recognition-confirm.component.html',
  styleUrls: ['./recognition-confirm.component.scss']
})
export class RecognitionConfirmComponent implements OnInit {

  constructor(public _dialogRef: MatDialogRef<RecognitionConfirmComponent>,) { }
public _guestName!:string;
  ngOnInit(): void {
    this._guestName=sessionStorage.getItem("guestName")!;
  }
 

}
