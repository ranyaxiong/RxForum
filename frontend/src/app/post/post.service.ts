import { Injectable } from '@angular/core';
import { POSTS } from './mock-posts';
import { Post } from './post';

@Injectable()
export class PostService {

  constructor() { }
  getPosts() {
    return Promise.resolve(POSTS);
  }
  getPost(id: number): Promise<Post> {
    return this.getPosts().then(posts => posts.find(post => post.id === id) );
  }

}
