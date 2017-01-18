import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import {Configuration } from '../../../app.constants';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() post: any;
  actionUrl: string;
  constructor(private authHttp: AuthHttp, configuration: Configuration) {
    this.actionUrl = configuration.API_URL + 'comments/';
   }

  ngOnInit() {
  }
  addComment(form: NgForm) {
    console.log(form.value);
    let data = Object.assign(form.value, {post: this.post.id, author: localStorage.getItem('currentUser')});
    console.log(data);
     this.authHttp.post(this.actionUrl, data)
     .map(res => res.json()).subscribe(comment => console.log(comment));

  }

}
