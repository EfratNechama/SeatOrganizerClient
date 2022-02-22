import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'password.validator';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.scss']
})
export class RegistrationComponentComponent implements OnInit {


  // constructor(private fb: FormBuilder) { 
  //   this.form = this.fb.group({
  //       password: ['', [PasswordValidator.strong]
  //       ],
  //   }); 

  constructor() { }

  ngOnInit(): void {

  }

  registerForm:FormGroup=new FormGroup({
    "id":new FormControl(0),
    "name":new FormControl("",[Validators.required,Validators.minLength(2)]),
    "email":new FormControl("",[Validators.required,Validators.email]),
    "password":new FormControl("",[Validators.required,Validators.minLength(7)]),

  })

  register(){

  }

}
