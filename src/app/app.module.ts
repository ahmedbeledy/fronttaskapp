import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MaxlengthPipe } from './maxlength.pipe';
 
  
@NgModule({
  declarations: [
    AppComponent, NavbarComponent,LoginComponent,

    TaskComponent,

    SignupComponent,

    TaskdetailsComponent,

    MyprofileComponent,

    MaxlengthPipe

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
