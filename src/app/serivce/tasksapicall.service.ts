import { HttpoperationService } from './httpoperation.service';
import { Injectable } from '@angular/core';
import { Task } from '../data/task';

@Injectable({
  providedIn: 'root'
})
export class TasksapicallService {

  constructor (private operationService:HttpoperationService) { }
  
  
  createtask(task:Task){
  
    return this.operationService.post("tasks",task)
       
      }
   
  gettasks(){
    return this.operationService.get("tasks")

  }
  gettasksbyid(taskid:string){
    return this.operationService.get(`tasks/${taskid}`)

  }
  edittask(task:Task){
   
    return this.operationService.patch(`tasks/${task._id}`, {
      "completed" : task.completed ,
      "description" : task.description 
    })

  }
  deletetask(taskid:string){
    return this.operationService.delete(`tasks/${taskid}`)

  }
             
         
    
  
         
    
  
  
}

