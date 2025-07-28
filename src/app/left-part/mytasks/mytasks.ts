import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { Innerpart } from "../innerpart/innerpart";
import { TaskTable } from '../../service/task-table';
import { CommonModule } from '@angular/common';
import { FormBuilder ,FormControlName,FormGroup,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-mytasks',
  imports: [ Innerpart,CommonModule,ReactiveFormsModule],
  templateUrl: './mytasks.html',
  styleUrl: './mytasks.css'
})
export class Mytasks implements OnInit{
  tasks:any[]=[];
  editForm:FormGroup;
ngOnInit(): void {
    this.showtask();
    
}

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
this.editForm.patchValue({
    title: task.title,
    description: task.description,
    due_date: task.due_date,
    priority: task.priority,
    label: task.label,
    notification: task.notification
  });

}
 
  updateTask(id: number) {
    const updatedTask = this.editForm.value;

    this.taskservice.edittask(id, updatedTask).subscribe({
      next: () => {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
          this.tasks[index] = { ...this.tasks[index], ...updatedTask };
        }

        alert('Task edited successfully');
        this.showedit = false;
        this.editForm.reset();
      },
      error: (err) => {
        console.error("Updation Fail", err);
        alert("Failed to update task.");
      }
    });

    console.log("Updated task:", updatedTask);
  }
  cancelEdit() {
    this.showedit = false;
    this.editForm.reset();
  }
}




