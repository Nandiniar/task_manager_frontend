import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Registerservice } from '../service/registerservice';
import { FormGroup, ReactiveFormsModule,FormControlName, FormControl, Validators } from '@angular/forms';
import { Register } from '../class/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
   form:FormGroup;
   loading=false;
   error='';
 constructor(private registers:Registerservice,private router:Router){
  this.form=new FormGroup(
    {
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    }
  );
 }

  clicknewuser:boolean=false;
clicklogin:boolean=true;
loginb(){
this.clicklogin=true;
this.clicknewuser=false;
this.form.reset();
}
newuser(){
this.clicknewuser=true;
this.clicklogin=false;
this.form.reset();
}
finalsubmit(){
  if(this.form.invalid){
    alert("Nothing is Found") ;
  }
 
if(this.clicknewuser){
  console.log("New registration is clicked");
  this.registers.registeruser(this.form.value).subscribe(
            
    {
        
      next:() =>{
        console.log("hiii , this is me");
        alert('Registration Succesful');
        
        this.loginb();
      },
      error(err){
        alert("Registration Failed"+err.message);
      }
    }
  )
  
  
  
}
else if(this.clicklogin){
  console.log("Login is clicked")
this.registers.loginuser(this.form.value).subscribe({
  next: (response) => {
    if (response.message === "Login Successful") {
      alert("Login Successful");
      this.router.navigate(['/dashboard']);
    } else {
      alert(response.message);
    }
  },
  error: (err) => {
    console.log(err.status);
    if(err.status==409){
      alert("User already exist");
    }
    else{
    alert("Server Error: " + err.message);
    }
  }
});
}
}

}
