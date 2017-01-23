import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Http } from "@angular/http";
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  updateForm: FormGroup;
  username: FormControl;
  password: FormControl;
  confirm_password: FormControl;
  email: FormControl;

  constructor(private builder: FormBuilder, private http: Http, private authService: AuthService) {
    this.username = new FormControl('', []);
    this.password = new FormControl('', []);
    this.confirm_password = new FormControl('', []);
    this.email = new  FormControl('', []);
    this.updateForm = builder.group({
      username: this.username,
      password: this.password,
      confirm_password: this.confirm_password,
      email: this.email,
    });
   }

  ngOnInit() {
  }
  update(data) {
    this.authService.update(this.updateForm.value).subscribe(res => console.log(res));
  }
}
