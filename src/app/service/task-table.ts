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
}