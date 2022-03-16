import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestDetailsComponent } from './guest-details/guest-details.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import{GuestService} from './guest.service';
import { GuestListComponent } from './guest-list/guest-list.component'

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [GuestDetailsComponent,GuestListComponent],
  imports: [ CommonModule,FormsModule, HttpClientModule, BrowserModule,ReactiveFormsModule,
    MaterialModule],
  providers: [GuestService],
  exports: [GuestDetailsComponent,GuestListComponent]
})
export class GuestModule { }


