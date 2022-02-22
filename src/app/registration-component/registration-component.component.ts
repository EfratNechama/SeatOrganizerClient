import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { User } from 'src/models/User';
import { AppService } from '../app.service';


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

  constructor(private _appService:AppService) { }

  ngOnInit(): void {

  }
@Input()
user!:User;

@Output()
onCreateUser:EventEmitter<User>=new EventEmitter();

  hide=true
  registerForm:FormGroup=new FormGroup({
    "Id":new FormControl(0),
    "userName":new FormControl("",[Validators.required,Validators.minLength(2)]),
    "Email":new FormControl("",[Validators.required,Validators.email]),
    "Password":new FormControl("",[Validators.required,Validators.minLength(7)]),

  })

  

  register(){
    this.user=this.registerForm.value;
    console.log(this.user);
    this.onCreateUser.emit(this.user);
    this._appService.createNewUser(this.user).subscribe(
      succes=>{
alert("succes create user");
      },
      err=>{
        alert("failed create user");
      }
    )
  }

}
