import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: string;
  constructor(private auth: AuthService, private router: Router) {}
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
  }
  doLogout() {
    this.auth.logout();
    this.router.navigateByUrl('/home');
  }
}
