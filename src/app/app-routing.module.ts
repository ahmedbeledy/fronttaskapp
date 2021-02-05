import { AuthgardGuard } from './gaurd/authgard.guard';
import { SignupComponent } from './signup/signup.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  

 {path:'tasks', component : TaskComponent, canActivate:[AuthgardGuard] },
 {path:'taskdetails/:id', component : TaskdetailsComponent,canActivate:[AuthgardGuard] },
 {path:'logout', component : LogoutComponent },
 {path:'myprofile', component : MyprofileComponent ,canActivate:[AuthgardGuard]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 