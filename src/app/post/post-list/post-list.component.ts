import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: Post[];
  constructor(private p: PostService) { }

  ngOnInit() {
    this.p.getPosts().then(posts => this.postList = posts);
  }

}
