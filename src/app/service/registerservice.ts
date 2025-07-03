import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../class/register';
import { Observable } from 'rxjs';
import { Loginresponse } from '../class/loginresponse';

@Injectable({
  providedIn: 'root'
})
export class Registerservice {
private url="http://localhost:8080/registereduser";
private loginurl="http://localhost:8080/loginuser";
  constructor(private httpclient:HttpClient) { }

  registeruser(user:Register):Observable<Register>{
return this.httpclient.post<Register>(
          
  this.url,
  {
            
    email:  user.email,
    password: user.password

  }
)
        
  }

 loginuser(user:Register): Observable<{ message: string }> {
  return this.httpclient.post<{ message: string }>(this.loginurl, user);
}

  
}