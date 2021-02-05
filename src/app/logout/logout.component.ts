import { UserapicallService } from './../serivce/userapicall.service';
import { Component, OnInit } from '@angular/core';
import { UserlogserviceService } from '../serivce/userlogservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private userlog:UserlogserviceService,private userapi:UserapicallService) {

   }

  ngOnInit(): void {
    this.userapi.logout().subscribe(()=>    this.userlog.logout(),err=>console.log(err)
    )


  }

}
