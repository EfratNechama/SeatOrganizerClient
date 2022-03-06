import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [EventDetailsComponent, EventListComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule, BrowserModule,
    ReactiveFormsModule, MatExpansionModule, MatIconModule, MatButtonModule, MatRadioModule,
    MatInputModule, MatCardModule, MatCheckboxModule, MatDatepickerModule
  ],
  providers: [EventService],
  exports: [EventDetailsComponent, EventListComponent]

})
export class EventModule { }
