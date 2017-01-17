import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Configuration } from '../app.constants';

import { AuthHttp } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticationService {
  private actionUrl: string;
  constructor(private authHttp: AuthHttp, private http: Http, private configuration: Configuration  ) {
        this.actionUrl = configuration.AUTH_URL;
  }

  register(data) {
    return this.http.post(this.actionUrl, data).map(res => res.json());
  }

  login(data) {
    // data = JSON.stringify(data);
    // this.testGetToken(data);
   //  console.log(this.getAuthToken(data));
    // return this.authHttp.post(this.API_URL + '/login/', data).map(res => res.json());
     return this.http.post(this.actionUrl, data)
    .subscribe((response: Response) => {
      let token = response.json() && response.json().token;
      console.log('map is called, the token value now is:', token);
      if (token) {
        console.log(token);
        localStorage.setItem('id_token', token);
        localStorage.setItem('currentUser', data.username);
        console.log('get token success');
      } else {
        console.log('get token failed');
      }
    });
  }

  logout() {
    localStorage.removeItem('id_token');
  }
  authenticated() {
    return tokenNotExpired();
  }
  getAuthToken(data) {
    console.log('getAuthToken is called');
    let headers = new Headers({'Content-Type': 'application/json', });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.actionUrl + '/api-token-auth/', data)
    .subscribe((response: Response) => {
      let token = response.json() && response.json().token;
      console.log('map is called, the token value now is:', token);
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
    this.http.post(this.actionUrl + '/api-token-auth/', data);
  }
}
