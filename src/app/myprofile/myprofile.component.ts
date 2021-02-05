import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksapicallService } from './../serivce/tasksapicall.service';
import { UserapicallService } from './../serivce/userapicall.service';
import { Component, OnInit } from '@angular/core';
import { UserlogserviceService } from '../serivce/userlogservice.service';
import { Task } from '../data/task';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  edit: boolean = false
  task: Task[] = []

  constructor(private userapi: UserapicallService, private taskapi: TasksapicallService,private userlog:UserlogserviceService) { }
  form!: FormGroup;

  data: any
  pending: number = 0
  ngOnInit(): void {
    this.userapi.getmyprofile().subscribe(res => this.data = res)
this.getbendingtasks()
  }
  editdata() {
    this.edit = true

  }
  delete(){
    this.userapi.deleteprofile().subscribe()
    this.userlog.logout()

  }
  getbendingtasks() {

    this.taskapi.gettasks().subscribe(res => {
      this.task = res as Task[]

      this.pending = this.task.filter(x => !x.completed).length;
      
    })


  }
}
