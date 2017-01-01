import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  username: FormControl;
  password: FormControl;
  email: FormControl;

  constructor(private builder: FormBuilder, private authService: AuthenticationService) {
    this.username = new FormControl('', []);
    this.password = new FormControl('', []);
    this.email = new FormControl('', []);
    this.registerForm = builder.group({
      username: this.username,
      password: this.password,
      email: this.email
    });
   }

  ngOnInit() {
  }
  register() {
    console.log(this.registerForm.value);
    let ok = this.authService.register(this.registerForm.value);
    console.log(ok);
    ok.subscribe(data => console.log(data));
  }

}
