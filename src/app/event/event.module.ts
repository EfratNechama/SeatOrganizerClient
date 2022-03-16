import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
// import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [EventDetailsComponent, EventListComponent],
  imports: [
    MaterialModule,
    CommonModule, FormsModule, HttpClientModule, BrowserModule,
    ReactiveFormsModule,

   // MatDialogModule
  ],
  providers: [EventService],
  exports: [EventDetailsComponent, EventListComponent,
    // MatDialogModule
  ]

})
export class EventModule { }
