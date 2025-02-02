import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {User} from '../user';
@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls:['./registers.component.css']
})
export class RegistersComponent implements OnInit {

  user:User=new User("","","",0,"");
  message:any;  
  constructor(private service:UserServiceService) { }

  ngOnInit() {
  }
  public registerNow(){
    let response=this.service.doRegistration(this.user);
    response.subscribe(data =>{
    this.message=data;
  })
  }
}
