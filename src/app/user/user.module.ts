import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[UserService,LoginComponentComponent,RegistrationComponentComponent]
})
export class UserModule { }
