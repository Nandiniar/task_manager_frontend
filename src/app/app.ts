import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet ,} from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLinkActive,RouterLink,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoginroute:boolean=false;
  protected title = 'angular_task_manager';
  constructor(private router:Router){
this.router.events.subscribe(event=>{
  if (event instanceof NavigationEnd){
    this.isLoginroute=this.router.url==='/login';
  }
})
  }
}
