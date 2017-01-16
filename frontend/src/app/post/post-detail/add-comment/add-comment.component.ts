import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import {Configuration } from '../../../app.constants';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() post: any;
  actionUrl: string;
  constructor(private http: Http, configuration: Configuration) {
    this.actionUrl = configuration.API_URL + 'comments/';
   }

  ngOnInit() {
  }
  addComment(post= this.post, form: NgForm) {
     this.http.post(this.actionUrl, Object.assign(form.value, {post: post})).map(res => res.json()).subscribe(comment => console.log(comment));
  }

}
