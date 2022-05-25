import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { EventService } from '../event.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { User } from 'src/models/User';
import { Event } from 'src/models/Event';
import { Category } from 'src/models/Category';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {FormBuilder} from '@angular/forms';
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

  // firstFormGroup!: FormGroup ;
  // secondFormGroup!: FormGroup;
  // thirdFormGroup!: FormGroup;
isEditable = false;


  constructor(private _eventService: EventService, private _activatedRoute: ActivatedRoute, private _userService: UserService,private _formBuilder: FormBuilder,
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

  newCategory = new FormControl();



  ngOnInit(): void {



    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
    // this.thirdFormGroup = this._formBuilder.group({
    //  thirdCtrl: ['', Validators.required],
    // });


    // this._personalCat = !this._personalCat;
    this._eventService.getGeneralCategory().subscribe(succ => {
      this._generalCategory = succ;
      this._generalCategory.forEach(c => c.selected = false);
      console.log(this._generalCategory)
    }
      // , 
      // err => { alert("can't get category :( ") }
    )






    this._user = this._userService._user;
    console.log(this._user);

  }
  _imageSrc!: string;
  _separated: boolean = false;
  _notSeparate: boolean = true;
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
    "invitationImageName": new FormControl(""),
    "invitationImagePath": new FormControl(""),
    // "categoryIds": new FormArray([])

    // name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // file: new FormControl('', [Validators.required]),
    // fileSource: new FormControl('', [Validators.required])

  })

  categoryGroup: FormGroup = new FormGroup({
    "name": new FormControl()
  })

  addCategoryGroup() {
    // return new FormGroup({
    //   "id": new FormControl(),
    //   "name": new FormControl()
    // })
    return new FormControl()
  }

  async saveNewEvent() {


    this._event = this.eventDetailsForm.value;
    this.dialogRef.close();

    console.log(this.eventDetailsForm.value);

    let _eventId!: number;
    await this._eventService.postEvent(this._event, this._user.id).subscribe(succ => {
      if (succ) {
  
        this._eventId = succ; console.log(succ);
        if (this._selectedFile) {
          this._eventService.postImage(this._selectedFile, this._eventId).subscribe(succ => { console.log("save image succ") })
        }

       
        this._sendCategory = this._generalCategory.filter(c => c.selected)
        this._sendCategory.forEach(c => {
          c.eventId = this._eventId;
          c.id = 0;
        });
        console.log(this._sendCategory);
        this._eventService.postCategory(this._sendCategory).subscribe(succ => {

          console.log("post category succesed!");

          //function load data category
          this._route.navigate(['/event-list'])
        });



      }
      else {
        console.log("failed to return event id");
      }
    })




    this._eventService.setReloadFlag(true);

  }

  onFileChange(event: any) {
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

  onSelectedCategoryChange(category: Category): void {
    category.selected = !category.selected;
    // (this.eventDetailsForm.get('categoryIds') as FormArray).removeAt(index);
  }
  selectCategory() {
    this._personalCat = !this._personalCat;
    this._eventService.getGeneralCategory().subscribe(succ => {
      this._generalCategory = succ;
      this._generalCategory.forEach(c => c.selected = false);
      console.log(this._generalCategory)
    }
      // , 
      // err => { alert("can't get category :( ") }
    )
  }
  addPersonalCategory(c: string) {
    // this._personalCategory.push(c);
    this._generalCategory.push({name: c, selected: true} as Category);
    this.newCategory.setValue(null);
    console.log(this._personalCategory)
  }

  // addGeneralCategory(c: string, f: boolean) {
  //   if (f) {
  //     console.log("exist");
  //   }
  //   else {
  //     this._personalCategory.push(c);
  //     console.log(this._personalCategory);
  //   }
  //   if (this._personalCategory.includes(c)) {
  //     console.log("exist");
  //   }
  //   else {
  //     this._personalCategory.push(c);
  //     console.log(this._personalCategory);


  //   }

  // }

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

 
}


