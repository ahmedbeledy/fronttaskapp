import { UserapicallService } from './../serivce/userapicall.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { UserlogserviceService } from '../serivce/userlogservice.service';
import { User } from '../data/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private formbulid:FormBuilder ,private userser: UserapicallService,private loginser:UserlogserviceService) { }
    form!: FormGroup;
     loginsucessful:boolean=false
  ngOnInit(): void {

    this.form=this.formbulid.group({
      password: ['',[ Validators.required,Validators.minLength(6)]],

Email:['mail@example.com',[Validators.required,Validators.email ]]})
       
}

login(){

   let data:User={
     name: "",
     email:"",
     age:0,
     token:"",
     password:""
     
   }
   
data.email=this.form.controls['Email'].value
data.password=this.form.controls['password'].value
  localStorage.setItem("Email",this.form.controls['Email'].value)
  this.userser.login(data).subscribe(responce=>
      {

      this.loginser.login(responce.email ,responce.token) }
    ,()=>{
      
      localStorage.removeItem("Email")
this.form.controls['password'].setValue([])
this.form.controls['Email'].setValue([])
      this.loginsucessful=true

}
)
  }  }
 
  
