import { Component } from '@angular/core';
import { credentials } from 'src/app/models/credentials.model';
import { LoginService } from 'src/app/services/pages/admin/login/login.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private routingService: RoutingService
  ) {}

  public credentials: credentials = new credentials();

  public errorMessage: string;

  public login(): void {
    this.errorMessage = '';
    this.loginService
      .authentication(this.credentials)
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.routingService.moveToPortal();
        } else {
          this.errorMessage = 'ログインに失敗しました。';
          console.log('ログインできませんでした。');
        }
      });
  }
}
