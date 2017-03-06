import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './comment.service';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Configuration } from '../app.constants';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() post: any;
  comments: any[];
  actionUrl: string;
  constructor(private c: CommentService, private authHttp: AuthHttp, private configuration: Configuration,
              private route: ActivatedRoute, private auth: AuthService) {
    this.actionUrl = configuration.API_URL + 'comments/';
   }

  ngOnInit() {
      this.route.params.switchMap((params: Params) => this.c.getAllByPost(+params['postId']))
      .subscribe(post => this.comments = post.comments);
     
      //this.comments = this.post && this.post.comments || [];

    //this.comments = this.post.comments || null;
    console.log(this.comments, this.post);
    console.log('The comments now is: ', this.comments);
  }
  addComment(form: NgForm) {
    console.log(form.value);
    let data = Object.assign(form.value, {post: this.post.id});
    console.log(data);
     this.authHttp.post(this.actionUrl, data)
     .map(res => res.json()).subscribe(comment => { console.log(comment); this.comments.push(comment); });

  }



}
