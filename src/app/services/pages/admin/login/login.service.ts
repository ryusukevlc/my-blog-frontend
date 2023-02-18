import { Injectable } from '@angular/core';
import { LoginApiService } from 'src/app/api/interface/login-api.service';
import { LoginInfo } from 'src/app/models/login-info.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private loginApiService: LoginApiService) {}

  public getLoginInfo(loginInfo: LoginInfo) {
    this.loginApiService.getLoginInfo(loginInfo.email, loginInfo.password);
  }
}
