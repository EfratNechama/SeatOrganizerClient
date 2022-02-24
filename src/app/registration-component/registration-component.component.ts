import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { User } from 'src/models/User';
import { AppService } from '../app.service';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.scss']
})
export class RegistrationComponentComponent implements OnInit {


  // constructor(private fb: FormBuilder) { 
  //   this.form = this.fb.group({
  //       password: ['', [PasswordValidator.strong]
  //       ],
  //   }); 

  constructor(private _appService:AppService,private _route:Router) { }

  ngOnInit(): void {

  }
@Input()
_user!:User;

@Output()
onCreateUser:EventEmitter<User>=new EventEmitter();

  hide=true
  registerForm:FormGroup=new FormGroup({
    "id":new FormControl(0),
    "userName":new FormControl("",[Validators.required,Validators.minLength(2)]),
    "email":new FormControl("",[Validators.required,Validators.email]),
    "password":new FormControl("",[Validators.required,Validators.minLength(7)]),

  })

  

  register(){
    this._user=this.registerForm.value;
    console.log(this._user);
    this.onCreateUser.emit(this._user);
    this._appService.createNewUser(this._user).subscribe(
      succes=>{
alert("succes create user");
this._route.navigate(['/event-list',this._user])
      },
      err=>{
        alert("failed create user");
      }
    )
  }

}
