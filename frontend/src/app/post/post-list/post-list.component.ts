import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: any;
  constructor(private p: PostService) { }

  ngOnInit() {
    this.p.getPosts().subscribe(posts => {this.postList = posts; console.log(this.postList); } );
         }

}
