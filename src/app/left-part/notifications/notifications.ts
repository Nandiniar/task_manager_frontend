import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { Innerpart } from "../innerpart/innerpart";

@Component({
  selector: 'app-notifications',
  imports: [ Innerpart],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

}
