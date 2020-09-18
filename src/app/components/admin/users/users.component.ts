import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../../../interfaces/users';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() hijoUsers: any;

  usersArray: User[] = [
    { _id: 1, 
      email: 'admin.maria@test.com', 
      roles: {
        admin: true
      },
      password: '123456',
    },
    { _id: 2, 
      email: 'localhost@test.com', 
      roles: {
        admin: false
      },
      password: '123456',
    },
  ];

  selectedUsers: User = new User();

  addOrEdit(){
    this.selectedUsers._id = this.usersArray.length + 1;
    console.log(this.selectedUsers);
    this.usersArray.push(this.selectedUsers);
    this.selectedUsers = new User();    
    console.log(this.usersArray);
  }
  constructor() { }

  ngOnInit(): void {
  }


}
