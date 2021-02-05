import { TasksapicallService } from './../serivce/tasksapicall.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Task } from '../data/task';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {
  form!: FormGroup;

  constructor(private activated: ActivatedRoute, private apiservice: TasksapicallService, private formbulid: FormBuilder) { }
  taskid: string = ""
  task: Task = new Task()
  ngOnInit(): void {
    this.activated.paramMap.subscribe(par => {
      this.taskid = par.get('id') || ""
      this.apiservice.gettasksbyid(this.taskid).subscribe(res => {
        this.task = res as Task
        console.log(this.task)

      })
    })

    this.form = this.formbulid.group({
      value: [''],
      check: ['']
    })
  }
  edit() {
    this.apiservice.edittask(this.task).subscribe()

  }
}
