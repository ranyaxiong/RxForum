import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
  API_URL = 'http://127.0.0.1:8000';
  constructor(private authHttp: AuthHttp, private http: Http) { }

  register(data) {
    return this.http.post(this.API_URL + '/users/', data).map(res => res.json());
  }

  login(data) {
    //data = JSON.stringify(data);
    //this.testGetToken(data);
    console.log(this.getAuthToken(data));
    return this.authHttp.post(this.API_URL + '/login/', data).map(res => res.json());
  }
  getAuthToken(data) {
    console.log("getAuthToken is called");
    let headers = new Headers({'Content-Type': 'application/json', });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.API_URL + '/api-token-auth/', data)
    .subscribe((response: Response) => {
      let token = response.json() && response.json().token;
      console.log("map is called, the token value now is:", token);
      if (token) {
        console.log(token);
        localStorage.setItem('id_token', token);
        console.log('get token success');
      } else {
        console.log('get token failed');
      }
    });
  }

  testGetToken(data) {
    this.http.post(this.API_URL + '/api-token-auth/', data);
  }
}
