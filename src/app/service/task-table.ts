import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taskclass } from '../class/taskclass';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskTable {
  public taskurl = "http://localhost:8080/create-task";
  public gettaskurl="http://localhost:8080/show-task";
  public deletetaskurl="http://localhost:8080/delete-task";
  public edittaskurl="http://localhost:8080/update-task";

  constructor(private httpclient: HttpClient) { }

  savetask(task: Taskclass): Observable<TaskTable> {
      const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpclient.post<TaskTable>(
      this.taskurl,
      {
        title: task.title,
        description: task.description,
        priority: task.priority,
        due_date: task.due_date,
        notification: task.notification,
        label: task.label
      },
       { headers: headers,
        withCredentials: true } // Include credentials (cookies) in the request
    );
  }

  getTask():Observable<any>{
    return this.httpclient.get(this.gettaskurl,{withCredentials:true});
  }

  deletetask(taskid:number):Observable<any>{
    return this.httpclient.delete(`${this.deletetaskurl}/${taskid}`,{
      withCredentials:true
    });
  }
  edittask(taskid:number,taskclass:any){
  const headers =new HttpHeaders(
    {
      "Content-type":"application/json"
    }
  )
    return this.httpclient.put(`${this.edittaskurl}/${taskid}`,
      taskclass,{
      withCredentials:true
    })
  }


}