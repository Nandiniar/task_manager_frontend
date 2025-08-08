import { Component } from '@angular/core';
import {FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      photo: new FormControl('') , // Initialize form control here
      username:new FormControl(''),
      email:new FormControl(''),
      fullname:new FormControl(''),
      role:new FormControl(''),
      
    });
  }


}
