import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Createnewtask } from "../../component/createnewtask/createnewtask";
import { Profile } from "../../profile/profile";

@Component({
  selector: 'app-innerpart',
  imports: [CommonModule, Createnewtask, Profile],
  templateUrl: './innerpart.html',
  styleUrl: './innerpart.css'
})
export class Innerpart {
  shownewtask:boolean=false;
newtaskp(){
  console.log("this new task is called")
this.shownewtask=true;

}
profileopen:boolean=false;
profilesection(){
this.profileopen=!this.profileopen;
}
}
