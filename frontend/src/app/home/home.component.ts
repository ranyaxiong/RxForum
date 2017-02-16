import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';

//declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

//  ngAfterViewInit() {
  //  $('.ui.dropdown').dropdown();
 // }
  ngOnInit() {}

}
