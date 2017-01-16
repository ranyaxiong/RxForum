import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() post: any;
  comments: any[];
  constructor(private c: CommentService) { }

  ngOnInit() {
    this.c.getAllByPost(this.post.id).subscribe(comments => this.comments = comments);
  }

}
