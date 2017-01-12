import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Configuration } from '../app.constants';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
  private actionUrl: string;
  constructor(private http: Http, private authHttp: AuthHttp, private configuration: Configuration) {
    this.actionUrl = configuration.API_URL + 'posts/';
   }
  getPosts() {
    return this.http.get(this.actionUrl).map(res => res.json());
  }
  getPost(id: number) {
   // return this.getPosts().map(posts => posts.find(post => post.id === id) ); 
    return this.http.get(this.actionUrl + String(id) + '/').map(res => res.json());
    }
  addPost(data) {
    console.log(localStorage.getItem('id_token'));
    return this.authHttp.post(this.actionUrl, data).map(res => res.json());
  }

}
