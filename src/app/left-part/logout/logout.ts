import { Component } from '@angular/core';
import { Dashboard } from "../dashboard/dashboard";
import { Innerpart } from "../innerpart/innerpart";

@Component({
  selector: 'app-logout',
  imports: [Innerpart],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {

}
