
import { Component, OnInit } from '@angular/core';
import { Task } from '../data/task';
import { TextService } from 'src/app/serivce/text.service';
import { TasksapicallService } from '../serivce/tasksapicall.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private TextS: TextService, private taskapi: TasksapicallService) { }
 
  task: Task[] = []
  ahmed: number[] = []
  isdelete: boolean = false;
  isloaded: String = "ISloasding"
  ngOnInit(): void {
    this.taskapi.gettasks().subscribe(res => {
      this.task = res as Task[]
    }

    )
    this.isloaded = ""
  }
  addtask( desc: string, completed: boolean) {
    if (this.TextS.TextServ(desc) == true) {
      alert("error")
    }
    else {

      let task: Task = new Task();
      task.description = desc,
        task.completed = completed
      this.task.push(task)
      this.taskapi.createtask(task).subscribe()

    }
  }
  itemchange(item: Task) {

    item.completed = !item.completed
    this.taskapi.edittask(item).subscribe()

  }
  taskcount() {
    return this.task.filter(x => !x.completed).length;

  }
  delete(index: number) {
    let task = this.task[index]
    task.deleted = true
    this.taskapi.deletetask(task._id).subscribe()
    setTimeout(() => this.task.splice(index, 1), 300)

  }
}
