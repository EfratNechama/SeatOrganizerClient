import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { LogIn } from 'src/models/LogIn';
import { Input,Output } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/models/User';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private _userService:UserService, private _route:Router) { }

  ngOnInit(): void {
  }
//_user!:User;  
hide=true;
@Input()
loginUser!:LogIn;



loginForm:FormGroup=new FormGroup({
  
  "email":new FormControl("",[Validators.required,Validators.email]),
  "password":new FormControl("",[Validators.required,Validators.minLength(7)]),

})



login()
{
  this.loginUser=this.loginForm.value;
  console.log(this.loginUser);
  this._userService.getUserByEmailAndPassword(this.loginUser).subscribe(data=>
    {
      if (data) {
        this._userService._user=data;
        //alert("LogIn success :) welcome "+this._userService._user.userName);
        console.log(this._userService._user);
        this._route.navigate(['/event-list',this._userService._user])
      }
      else
      {
        alert("user doesn't exist :() ");
      }
    }

   
  
    
  ) 
}
  
  
}   
 





  


    
  
  
  
  
  
  
  




