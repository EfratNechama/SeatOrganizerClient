import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [LoginComponentComponent, RegistrationComponentComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
BrowserModule,
    MaterialModule
  ],
  providers: [UserService],
  exports: [LoginComponentComponent, RegistrationComponentComponent]
})
export class UserModule { }
