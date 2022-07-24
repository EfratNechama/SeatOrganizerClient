import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecognitionConfirmComponent } from './recognition-confirm/recognition-confirm.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { RecognitionService } from './recognition.service';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';



@NgModule({
  declarations: [RecognitionConfirmComponent],
  imports: [ CommonModule,FormsModule, HttpClientModule, BrowserModule,ReactiveFormsModule,
    MaterialModule],
  providers: [RecognitionService],
  exports: [RecognitionConfirmComponent]
})
export class RecognitionModule { }
