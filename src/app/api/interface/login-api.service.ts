import { Injectable } from '@angular/core';
import { Urls } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  constructor() {}

  public getLoginInfo(email: string, password: string) {
    let url: URL = new URL(Urls.LOGIN_URL);
    url.searchParams.append('email', email);
    url.searchParams.append('password', password);

    fetch(url);
  }
}
