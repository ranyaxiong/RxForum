import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  API_URL = 'http://127.0.0.1:8000';
  constructor(private http: Http) { }

  register(data) {
    return this.http.post(this.API_URL + '/users/', data).map(res => res.json());
  }

  login(data) {
    //data = JSON.stringify(data);
    return this.http.post(this.API_URL + '/login/', data).map(res => res.json());
  }
}
