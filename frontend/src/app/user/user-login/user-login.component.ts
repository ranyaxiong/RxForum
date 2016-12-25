import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;
  email: FormControl;

  constructor(private builder: FormBuilder, private userService: UserService) {
    this.username = new FormControl('', []);
    this.password = new FormControl('', []);
    this.email = new FormControl('', []);
    this.loginForm = builder.group({
      username: this.username,
      password: this.password,
      email: this.email
    });
   }

  ngOnInit() {
  }
  login() {
    console.log(this.loginForm.value);
    let ok = this.userService.login(this.loginForm.value);
    console.log(ok);
  //  ok.subscribe(data => console.log(data));
  }

}
