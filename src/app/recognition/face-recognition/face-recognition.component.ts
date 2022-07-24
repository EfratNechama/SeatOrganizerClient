import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event/event.service';
import { Event } from 'src/models/Event';
import { MaterialModule } from 'src/app/material/material.module';
import { TmplAstRecursiveVisitor, TreeError } from '@angular/compiler';
import { WebcamImage } from 'ngx-webcam';

import { ImgDataUrl } from 'src/models/ImgDataUrl';
import { CameraComponent } from 'src/app/camera/camera.component';
import { RecognizedGuest } from 'src/models/RecognizedGuest';
import { MatDialog, MatDialogRef , MatDialogModule} from '@angular/material/dialog';

import { GuestConfirmComponent } from '../../guest/guest-confirm/guest-confirm.component';
import { RecognitionService } from '../recognition.service';
import { RecognitionConfirmComponent } from '../recognition-confirm/recognition-confirm.component';
@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.scss']
})
export class FaceRecognitionComponent implements OnInit {
  _openCamera:boolean=true;
  _event!:Event;
  _eventId?:number;
  // _fromReco:boolean=true;
  _guestImg!:WebcamImage;
  _imgDataUrl!:string;
  _recognizedGuest!:RecognizedGuest;
  _beforeReco:boolean=true
  
  constructor(public dialog: MatDialog,private _recognitionService:RecognitionService, private _camera:CameraComponent) { }
  
  
  webcamImage?: WebcamImage;
  handleImage(webcamImage: WebcamImage) {
  this.webcamImage = webcamImage;
  }

  ngOnInit(): void {

this._beforeReco=true
sessionStorage.setItem("component", "fr")
this._event = JSON.parse(sessionStorage.getItem("event")!);

  }
  openCamera(){
    // this._openCamera=!this._openCamera;
   }
 openDialog(): void {
    const dialog= this.dialog.open(RecognitionConfirmComponent, {
      
      height: '30%',
      width: '30%',
    });

    dialog.afterClosed().subscribe(result => {
      this._beforeReco=false,
      console.log('The dialog was closed', this._beforeReco)


    });
  }
  goToRecognition(){
     this._guestImg=JSON.parse(sessionStorage.getItem("guestImg")!)
     this._recognitionService.sendImgToRecognition(this._event.id,this._guestImg).subscribe(succ=>{this._recognizedGuest=succ,
      console.log(this._recognizedGuest)
      sessionStorage.setItem("guestName",this._recognizedGuest.guestName!)
    this.openDialog();
  })
  }

}
