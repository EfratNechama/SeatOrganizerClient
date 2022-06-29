import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventModule } from './event/event.module';
import { GuestModule } from './guest/guest.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RegistrationComponentComponent } from './user/registration-component/registration-component.component';
import { LoginComponentComponent } from './user/login-component/login-component.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { GuestListComponent } from './guest/guest-list/guest-list.component';
import { UserModule } from './user/user.module';
import { MaterialModule } from './material/material.module';
import { GuestDetailsComponent } from './guest/guest-details/guest-details.component';
import { GuestConfirmComponent } from './guest/guest-confirm/guest-confirm.component';
import { DisplayPlacementComponent } from './placement/display-placement/display-placement.component';
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestConfirmComponent,
    DisplayPlacementComponent,
    CameraComponent,
    FaceRecognitionComponent,
  
   
    // RegistrationComponentComponent,
    // LoginComponentComponent,
    // GuestDetailsComponent,

    // GuestListComponent
  ],
  imports: [
    WebcamModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'event-list', component: EventListComponent },
      { path: 'event-details', component: EventDetailsComponent },
      { path: 'guest-list', component: GuestListComponent },
      { path: 'guest-details', component: GuestDetailsComponent },
      { path: 'guest-confirm', component: GuestConfirmComponent },
      { path: 'display-placement', component: DisplayPlacementComponent },
      { path: 'face-recognition', component: FaceRecognitionComponent },
      {path:'home' ,component: AppComponent},
    ],
      { useHash: true }),
    EventModule,
    GuestModule,
    //UserModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MaterialModule,
     FormsModule,
  ]
})
export class AppModule { }
