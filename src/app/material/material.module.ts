import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,MatToolbarModule,MatSliderModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule,
    MatRadioModule,MatListModule,MatInputModule,MatFormFieldModule,MatCardModule,MatIconModule,MatCheckboxModule,
    MatDialogModule,
  ],
  exports:[
    MatExpansionModule,MatToolbarModule,MatSliderModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule,
    MatRadioModule,MatListModule,MatInputModule,MatFormFieldModule,MatCardModule,MatIconModule,MatCheckboxModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
