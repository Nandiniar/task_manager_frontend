import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Createnewtask } from "../../component/createnewtask/createnewtask";

@Component({
  selector: 'app-innerpart',
  imports: [CommonModule, Createnewtask],
  templateUrl: './innerpart.html',
  styleUrl: './innerpart.css'
})
export class Innerpart {
  shownewtask:boolean=false;
newtaskp(){
  console.log("this new task is called")
this.shownewtask=true;

}
}
