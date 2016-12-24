import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  API_URL = 'http://127.0.0.1:8000/';
  constructor(private http: Http) { }
  getPosts() {
    return this.http.get(this.API_URL + 'posts').map(res => res.json());
  }
  getPost(id: number) {
    return this.getPosts().map(posts => posts.find(post => post.id === id) );
    }
  addPost(data) {
    return this.http.post(this.API_URL + 'posts/', data).map(res => res.json());
  }

}
