import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { LogIn } from 'src/models/LogIn';
import { Input,Output } from '@angular/core';
import { AppService } from '../app.service';
import { User } from 'src/models/User';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private _appService:AppService) { }

  ngOnInit(): void {
  }
_user!:User;  
hide=true;
@Input()
loginUser!:LogIn;



loginForm:FormGroup=new FormGroup({
  
  "Email":new FormControl("",[Validators.required,Validators.email]),
  "Password":new FormControl("",[Validators.required,Validators.minLength(7)]),

})
// login() {
//   this.userService.getUser(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).subscribe(data => {
//     this.userService.user = data
//     if (this.userService.user == null) {
//       alert("שם המשתמש או הסיסמא אינם תקינים, נסה שנית")
//         return;
//     }
//     alert(`welcome to ${this.userService.user.name}`)
//     this.router.navigate(['/home'])});
// }

login()
{
  this.loginUser=this.loginForm.value;
  console.log(this.loginUser);
  this._appService.getUserByEmailAndPassword(this.loginUser).subscribe(data=>
    {
      if (data) {
        this._user=data;
        alert("LogIn success :) welcome "+this._user.userName);
        console.log(this._user);
      }
      else
      {
        alert("user doesn't exist :() ");
      }
    }

   
  
    
  ) 
}
  
  
}   
 





  


    
  
  
  
  
  
  
  




