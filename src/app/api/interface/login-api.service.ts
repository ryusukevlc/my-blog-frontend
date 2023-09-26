import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/core/constants/urls';
import { credentials } from 'src/app/core/models/credentials.model';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  constructor(private httpClient: HttpClient) {}

  public getLoginInfo(email: string, password: string) {
    const url: URL = new URL(Urls.LOGIN_URL);
    url.searchParams.append('email', email);
    url.searchParams.append('password', password);

    fetch(url);
  }

  public authentication(credentials: credentials): Observable<boolean> {
    return this.httpClient.post<boolean>(Urls.LOGIN_URL, credentials);
  }
}
