import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskTable } from '../../service/task-table';


@Component({
  selector: 'app-createnewtask',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './createnewtask.html',
  styleUrl: './createnewtask.css'
})
export class Createnewtask {
  form:FormGroup;
  notification:boolean=false;
  isvisible:boolean=true;
  constructor(private taskservice:TaskTable){
    this.form=new FormGroup(
       {
    title  :new FormControl('',[Validators.required]),
    notification :new FormControl(this.current,[Validators.required]),
 priority :new FormControl(this.optionp,[Validators.required]),
due_date   :new FormControl('',[Validators.required]),
   label   :new FormControl(this.optionl,[Validators.required]),
    description :new FormControl('',Validators.required)
    }
    );
  }
addnotifi(){
this.notification=true;
}
options=['In 1 hour', 'In 6 hour','In 12 hour'];
current=this.options[1];
dropdownvisible=false;
prioritycl:boolean=false;
toggledropdow(){
  this.dropdownvisible=!this.dropdownvisible;
}
selectoptionsnotific(opt:string){
this.current=opt;
this.dropdownvisible=false;
this.form.patchValue({notification:opt});
}
priorityclick(){
this.prioritycl=!this.prioritycl;
}
priority=['LOW','MEDIUM','HIGH'];
optionp=this.priority[0];
selectoptionspriority(opt:string){
  this.optionp=opt;
  this.prioritycl=false;
  this.form.patchValue({priority:opt})
}
label=['BUG','FRONTEND','BACKEND'];
optionl=this.label[0];
labelclick:boolean=false;
labelclicko(){
this.labelclick=!this.labelclick;
}
clickbuttonl(opt:string){
this.optionl=opt;
this.labelclick=false;
this.form.patchValue({label:opt});
}
closeb(){
  this.isvisible=false;
}
savetask(){
 if (this.form.valid) {
      console.log('Form values:', this.form.value);
      this.taskservice.savetask(this.form.value).subscribe({
        next: (response) => {
          console.log("Task saved successfully", response);
          alert('Task is saved');
          this.form.reset(); 
        },
        error: (err) => {
          console.error('Error saving task:', err);
          alert("Task is not saved: " + err.message);
        }
      });
    } else {
      console.log('Form is invalid');
      alert('Please fill in all required fields');
    }
  }
}
