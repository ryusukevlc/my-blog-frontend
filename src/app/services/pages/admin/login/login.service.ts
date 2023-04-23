import { Injectable } from '@angular/core';
import { LoginApiService } from 'src/app/api/interface/login-api.service';
import { credentials } from 'src/app/models/credentials.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private loginApiService: LoginApiService) {}

  public authentication(credentials: credentials) {
    return this.loginApiService.authentication(credentials);
  }
}
