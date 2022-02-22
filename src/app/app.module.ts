import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{MatNativeDateModule} from '@angular/material/core';
import{MatIconModule} from '@angular/material/icon';
import{MatCheckboxModule} from '@angular/material/checkbox';
import{MatCardModule}from '@angular/material/card';
import{MatFormFieldModule}from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import{MatListModule}from '@angular/material/list';
import{MatRadioModule}from '@angular/material/radio';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventModule } from './event/event.module';
import { GuestModule } from './guest/guest.module';
import {MatButtonModule}from '@angular/material/button';
// import {  MatToolbar} from '@angular/material/toolbar';
import {  MatToolbarModule} from '@angular/material/toolbar';
// import {  MatToolbarRow} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    // GuestDetailsComponent,
    
    // GuestListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
    ]),  
    EventModule,
    GuestModule,
    MatSliderModule,
    // MatToolbarRow,
    // MatToolbar,
    MatToolbarModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
     MatToolbarModule,
     FormsModule, 
     MatCardModule
     ,MatFormFieldModule
     ,MatInputModule,
     MatListModule,
     MatRadioModule
    
     
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    RegistrationComponentComponent,
    LoginComponentComponent,
    MatNativeDateModule,FormsModule,
MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,
  ]
})
export class AppModule { }
