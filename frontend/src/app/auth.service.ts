import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Configuration } from './app.constants';

import { AuthHttp } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
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
  update(data) {
    return this.authHttp.put(this.configuration.API_URL + 'profiles/', data);
  }
}
