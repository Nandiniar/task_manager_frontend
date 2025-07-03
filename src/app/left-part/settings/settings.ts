import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { Innerpart } from "../innerpart/innerpart";

@Component({
  selector: 'app-settings',
  imports: [ Innerpart],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {

}
