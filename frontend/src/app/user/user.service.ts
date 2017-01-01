import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Configuration } from '../app.constants';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
  private actionUrl: string;
  constructor(private http: Http, private configuration: Configuration  ) {
    this.actionUrl = configuration.API_URL + 'users/';
  }

  getAll() {
    return this.http.get(this.actionUrl).map(res => res.json());
  }
  getById(id) {
    return this.http.get(this.actionUrl + '${id}/');
  }
}
