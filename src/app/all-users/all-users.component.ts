import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service'
import {User} from '../user'
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users : any;
  constructor(private service:UserServiceService) { }

  ngOnInit(){
    let response=this.service.getUser();
    response.subscribe(data => this.users=data);
  }

}
