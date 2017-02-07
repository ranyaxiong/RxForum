import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {  AuthService } from '../../auth.service';

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

  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router) {
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
    let ok = this.authService.login(this.loginForm.value);
    console.log(ok);
    if (localStorage.getItem('id_token')) {
      console.log('login function, if is ok');
      this.router.navigate(['/home']);
    }
  //  ok.subscribe(data => console.log(data));
  }

}
