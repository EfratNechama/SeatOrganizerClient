import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { EventService } from '../event.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { User } from 'src/models/User';
import { Event } from 'src/models/Event';
import { Category } from 'src/models/Category';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from 'src/app/user/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageSnippet } from 'src/models/imageSnippet';



//test!!!
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  _selectedFile: any;
  
  constructor(private _eventService: EventService, private _activatedRoute: ActivatedRoute, private _userService: UserService,
    public dialogRef: MatDialogRef<EventDetailsComponent>,
    private _route: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  @Input()
  _user!: User;



  @Output()
  onCreateEvent: EventEmitter<Event> = new EventEmitter();

  //_separatedFlag: boolean = false;
  _generalCategory: Category[] = [];
  _personalCategory: string[] = []
  _sendCategory: Category[] = [];

  _event!: Event;
  _eventId!: number;



  ngOnInit(): void {

    this._user = this._userService._user;
    console.log(this._user);

  }
  _imageSrc!: string ;
  _separated: boolean = false;
  _notSeparate: boolean = false;
  _special: boolean = false;
  _personalCat: boolean = false;
  eventDetailsForm: FormGroup = new FormGroup({
    "id": new FormControl(0),
    "name": new FormControl(" "),
    "separatedSeats": new FormControl(false),
    "numTablesMale": new FormControl(0),
    "numTablesFemale": new FormControl(0),
    "numChairsMale": new FormControl(0),
    "numChairsFemale": new FormControl(0),
    "numSpecialTableChairsMale": new FormControl(0),
    "numSpecialTableChairsFemale": new FormControl(0),
    "invitationImage": new FormControl(null),
    "eventDate": new FormControl(new Date()),
    "invitationImageName":new FormControl(""),
    "invitationImagePath":new FormControl(""),

    // name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // file: new FormControl('', [Validators.required]),
    // fileSource: new FormControl('', [Validators.required])

  })

  categoryGroup: FormGroup = new FormGroup({
    "name": new FormControl()
  })

  saveNewEvent() {

    this._event = this.eventDetailsForm.value;
    this.dialogRef.close();
    let x;
    console.log(this.eventDetailsForm.value);
    this._eventService.postEvent(this._selectedFile, this._event, this._user.id).subscribe(async succ => {
      this._eventId = succ;
      this._eventService.setReloadFlag(true);
      console.log(this._eventId);
      console.log("in c");
      let x;
      await this._generalCategory.forEach(a => {

        // x = document.getElementsByName("aa")[0] as HTMLInputElement;
        x = document.getElementById(a.name) as HTMLInputElement;

        console.log(x, "x");
        // if(x == null){
        //   // x = document.getElementById(a.name) as HTMLInputElement;
        // }
        if (x !=null && x.checked) this._personalCategory.push(a.name)

      });
      await this._personalCategory.forEach(el => {
        this._sendCategory.push(new Category(0, el, this._eventId));

      });
      this._eventService.postCategory(this._sendCategory).subscribe(succ => {

        console.log("post category succesed!");

        //function load data category
        this._route.navigate(['/event-list'])
      })
    });
  }

  onFileChange(event:any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this._selectedFile = new ImageSnippet(file, event.target.result);

        this._imageSrc = reader.result as string;

        this.eventDetailsForm.patchValue({
          fileSource: reader.result
        });

      };

    }
  }
  selectCategory() {
    this._personalCat = !this._personalCat;
    this._eventService.getGeneralCategory().subscribe(succ => {
      this._generalCategory = succ;
      console.log(this._generalCategory)
    }
      // , 
      // err => { alert("can't get category :( ") }
    )
  }
  addPersonalCategory(c: string) {
    this._personalCategory.push(c);
    console.log(this._personalCategory)
  }

  addGeneralCategory(c: string, f: boolean) {
    if (f) {
      console.log("exist");
    }
    else {
      this._personalCategory.push(c);
      console.log(this._personalCategory);
    }
    if (this._personalCategory.includes(c)) {
      console.log("exist");
    }
    else {
      this._personalCategory.push(c);
      console.log(this._personalCategory);


    }

  }

  notSeparated() {
    this._notSeparate = !this._notSeparate;
    this._special = false;
    if (this._separated) {
      this._separated = !this._separated;
    }

  }
  separated() {
    this._separated = !this._separated;
    this._special = false;
    if (this._notSeparate) {
      this._notSeparate = !this._notSeparate;

    }
  }

  wantSpecial() {
    this._special = !this._special;
  }

  //  <HTMLScriptElement[]><any>document.getElementsByName(id))[0];

  // this._generalCategory.forEach(a => { var x= document.getElementsByName(a.name)[0] as HTMLInputElement;if(x.checked) this._personalCategory.push(a.name) });


  // saveImage(){
  //   console.log(this.eventDetailsForm.value);
  //  // let postImage = new UserImageModel();
  //   //postImage.fileName = this.myForm.value.file;
  //   //postImage.binaryData = this.myForm.value.fileSource;

  //   this._eventService.postEvent(this._selectedFile)
  //     .subscribe(res => {
  //       console.log(res);
  //       alert('Uploaded Successfully.');
  //       this._eventService.setReloadFlag(true);
  //     },
  //       error => {
  //         let errorMsg: string;
  //         //if (error.error instanceof ErrorEvent) {
  //         //  errorMsg = `שגיאה בשמירת תמונה: ${error.error.message}`;
  //         //} else {
  //         //  errorMsg = this.getServerErrorMessage(error);
  //         //}
  //         alert(error.error)
  //       });
  // }
}


