import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PostService } from '../post.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;
  constructor(private route: ActivatedRoute,
              private p: PostService,
              private location: Location,
              private auth: AuthService) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.p.getPost(+params['id']))
    .subscribe(post => {this.post = post; console.log(this.post); });
       }

}
