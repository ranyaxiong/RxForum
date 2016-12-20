import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute,
              private p: PostService,
              private location: Location) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.p.getPost(+params['id']))
    .subscribe(post => this.post = post);
  }

}
