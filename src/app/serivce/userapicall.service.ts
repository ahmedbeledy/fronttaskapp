import { Injectable } from '@angular/core';
import { HttpoperationService } from './httpoperation.service';

@Injectable({
  providedIn: 'root'
})
export class UserapicallService {

  constructor(private operationService:HttpoperationService) { }
   
  
  createuser(user:any){
  
    return this.operationService.post("users", {
      "name":user.name,
      "email" : user.Email ,
      "password" : user.password ,
      "age":user.age
    })
       
      }
   login(user:any){
    
        return this.operationService.post("users/login",   {
          "email" : user.email ,
          "password" : user.password 
        })
           
    }
  logout(){
    
    return this.operationService.post("users/logout","")
               
                   }
  logoutall(){
  return this.operationService.post("users/logoutAll","")
                     
  }
  getmyprofile(){
    return this.operationService.get("users/me")

  }
  editprofile(user:any){
    return this.operationService.patch("users/me", {
      "email" : user.Email ,
      "password" : user.password ,
      "age":user.age,
      "name":user.name 
    })

  }
  deleteprofile(){
    return this.operationService.delete("users/me")

  }
            
}
