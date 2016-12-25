import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
  API_URL = 'http://127.0.0.1:8000/';
  constructor(private http: Http, private authHttp: AuthHttp) { }
  getPosts() {
    return this.http.get(this.API_URL + 'posts').map(res => res.json());
  }
  getPost(id: number) {
    return this.getPosts().map(posts => posts.find(post => post.id === id) );
    }
  addPost(data) {
    console.log(localStorage.getItem('id_token'));
    return this.authHttp.post(this.API_URL + 'posts/', data).map(res => res.json());
  }

}
