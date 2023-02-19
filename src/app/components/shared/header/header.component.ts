import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // ハンバーガーメニューの開閉状態（true: 開いている, false: 閉じている）
  public isOpened: boolean = false;

  public toggleHamburgerMenu() {
    this.isOpened = !this.isOpened;
  }
}
