import { Component, EventEmitter, Output } from '@angular/core';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public routingService: RoutingService) {}

  // ハンバーガーメニューの開閉状態（true: 開いている, false: 閉じている）
  public isOpened: boolean = false;

  // ダークモードの適用状態（true: ダークモード, false: ライドモード）
  public isDarkMode: boolean = false;

  // ダークモードの適用状態を親コンポーネントに渡す用のEventEmitter
  @Output() darkModeEvent = new EventEmitter<boolean>();

  public toggleHamburgerMenu() {
    this.isOpened = !this.isOpened;
  }

  public toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeEvent.emit(this.isDarkMode);
    localStorage['theme'] = this.isDarkMode ? 'dark' : 'light';
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
    if (localStorage['theme'] == 'dark') {
      this.isDarkMode = true;
    }
  }
}
