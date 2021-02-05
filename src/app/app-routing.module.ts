import { AuthgardGuard } from './gaurd/authgard.guard';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TaskComponent } from './task/task.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  

 {path:'tasks', component : TaskComponent, canActivate:[AuthgardGuard] },
 {path:'taskdetails/:id', component : TaskdetailsComponent,canActivate:[AuthgardGuard] },
 {path:'myprofile', component : MyprofileComponent ,canActivate:[AuthgardGuard]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 