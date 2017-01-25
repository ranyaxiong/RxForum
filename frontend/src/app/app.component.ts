import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private auth: AuthService, private router: Router) {}
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
