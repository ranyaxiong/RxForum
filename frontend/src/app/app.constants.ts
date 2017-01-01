import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public SERVER_URL = 'http://127.0.0.1:8000/';
  public TOKEN_URL = 'api-token-auth/';
  public AUTH_URL = this.SERVER_URL + this.TOKEN_URL;
  public API_URL = this.SERVER_URL + 'api/v1/';
}
