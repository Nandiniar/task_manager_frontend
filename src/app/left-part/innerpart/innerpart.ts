import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-innerpart',
  imports: [CommonModule],
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
