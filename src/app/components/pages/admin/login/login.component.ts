import { Component } from '@angular/core';
import { LoginInfo } from 'src/app/models/login-info.model';
import { LoginService } from 'src/app/services/pages/admin/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  public loginInfo: LoginInfo;

  public login() {
    this.loginService.getLoginInfo(this.loginInfo);
  }
}
