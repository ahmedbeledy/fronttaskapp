import { UserapicallService } from './../serivce/userapicall.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { User } from '../data/user';
import { UserlogserviceService } from '../serivce/userlogservice.service';
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

  let data:User=new User()
data.email=this.form.controls['Email'].value
data.password=this.form.controls['password'].value
  localStorage.setItem("Email",this.form.controls['Email'].value)
  this.userser.login(data).subscribe(responce=>  {data  = responce as User
      this.loginser.login(data.email,data.token) }
    ,()=>{
      
      localStorage.removeItem("Email")
this.form.controls['password'].setValue([])
this.form.controls['Email'].setValue([])
      this.loginsucessful=true

}
)
  }  }
 
  
