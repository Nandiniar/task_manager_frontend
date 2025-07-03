import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { Innerpart } from "../innerpart/innerpart";

@Component({
  selector: 'app-mytasks',
  imports: [ Innerpart],
  templateUrl: './mytasks.html',
  styleUrl: './mytasks.css'
})
export class Mytasks {

}
