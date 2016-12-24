import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  title: FormControl;
  content: FormControl;


  constructor(private builder: FormBuilder, private postService: PostService) {
    this.title = new FormControl('', []);
    this.content = new FormControl('', []);
    this.addPostForm = builder.group({
      title: this.title,
      content: this.content,
      });
   }

  ngOnInit() {
  }
  addPost() {
    console.log(this.addPostForm.value);
    let ok = this.postService.addPost(this.addPostForm.value);
    console.log(ok);
    ok.subscribe(data => console.log(data));
  }


}
