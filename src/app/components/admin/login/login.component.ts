import { Component } from '@angular/core';
import { credentials } from 'src/app/core/core-models/credentials.model';
import { LoginService } from 'src/app/components/admin/login/login.service';
import { RoutingService } from 'src/app/core/core-services/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
      .subscribe(isAuthenticated => {
        if (isAuthenticated) {
          this.routingService.moveToPortal();
        } else {
          this.errorMessage = 'ログインに失敗しました。';
          console.log('ログインできませんでした。');
        }
      });
  }
}
