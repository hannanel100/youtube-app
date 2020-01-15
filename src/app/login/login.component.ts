import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor() {
    this.user = {
      userName: '',
      password: ''
    }
  }
  onSubmit(f: NgForm) {

    this.user.userName = f.value.userName;
    this.user.password = f.value.password;
    console.log(this.user);

  }

  ngOnInit() {
  }

}
