import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { Innerpart } from "../innerpart/innerpart";
import { TaskTable } from '../../service/task-table';
import { CommonModule } from '@angular/common';
import { FormBuilder ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mytasks',
  imports: [ Innerpart,CommonModule],
  templateUrl: './mytasks.html',
  styleUrl: './mytasks.css'
})
export class Mytasks implements OnInit{
  tasks:any[]=[];
ngOnInit(): void {
    this.showtask();
    
}
editForm:FormGroup;
constructor(private taskservice:TaskTable,private fb:FormBuilder){
  this. editForm=this.fb.group(
    {
      title:[''],
      description:[''],
      due_date:[''],
priority:['MEDIUM'],
label:['FEATUREE'],
notification:['']
    }
  )
}
showtask() {
  this.taskservice.getTask().subscribe({
    next: (response) => {
      this.tasks = response;
    },
    error: (error) => {
      console.log("Error fetching task:", error);
    },
  complete: () => {
        console.log('Task fetching completed');
      }
  });
}

 deletetaskwork(id:number){
  this.taskservice.deletetask(id).subscribe({
next:()=>{
  this.tasks=this.tasks.filter(task=>task.id!=id)  // this at the same time remove the task from the table without the need of refreshing the page
  alert(`Task deleted sucessfully`)
},
error:(err)=>console.error("Delete Fail",err)
  });
 }
 showedit:boolean=false;
 selectedtask:any=null;

editbutton(task:any){
this.showedit=true;
this.selectedtask=task;

}
 

}
