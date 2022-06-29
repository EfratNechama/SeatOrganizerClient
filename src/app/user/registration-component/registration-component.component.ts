import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { User } from 'src/models/User';
import { UserService } from '../user.service';
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

  constructor(private _userService:UserService,private _route:Router) { }

  ngOnInit(): void {

  }
@Input()
//_user!:User;

@Output()
onCreateUser:EventEmitter<User>=new EventEmitter();

  hide=true
  registerForm:FormGroup=new FormGroup({
    "id":new FormControl(0),
    "userName":new FormControl("",[Validators.required,Validators.minLength(2)]),
    "email":new FormControl("",[Validators.required,Validators.email]),
    "password":new FormControl("",[Validators.required,Validators.minLength(7)]),

  })

  handleKeyUp(e:any){
  
    if(e.keyCode === 13 && this.registerForm.valid){
       this.register();
    }
 }

  register(e?:any){
    this._userService._user=this.registerForm.value;
    console.log(this._userService._user);
    //this.onCreateUser.emit(this._user);
    this._userService.createNewUser(this._userService._user).subscribe(
      succes=>{
    console.log("succeded to create user");
    this._route.navigate(['/event-list',this._userService._user])
      },
      err=>{
        alert("failed to create user");
      }
    )
  }

}
