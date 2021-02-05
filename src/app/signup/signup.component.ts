import { UserapicallService } from './../serivce/userapicall.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserlogserviceService } from '../serivce/userlogservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  @Input() formtype:string ="sign up form";
   signup:boolean=false


  constructor(private formBuilder: FormBuilder,private userservice:UserapicallService,private userlogser:UserlogserviceService) { }

  ngOnInit() {
    
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          age: ['', [Validators.required,Validators.pattern("^[1-9]*\d*$")]],
          Email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: this.MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.formtype==("edit data form"))
   {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
   this.userservice.editprofile(this.registerForm.value).subscribe(
  
     ()=>
     {
       
      this.userservice.logoutall().subscribe()
      this.userlogser.logout()

    },
()=>{
  this.signup=true
  this.registerForm.controls['Email'].setValue([])
this.registerForm.controls['password'].setValue([])
}
   )
}
    else {  this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
     this.userservice.createuser(this.registerForm.value).subscribe(
       res=>
       {
       this.userlogser.login(this.registerForm.controls['Email'].value,res.token)
       },()=>{
  this.signup=true
  this.registerForm.controls['Email'].setValue([])
this.registerForm.controls['password'].setValue([])
alert("this account already registerd")

       }
     )
  }}

   MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
}
