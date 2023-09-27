import { Component, EventEmitter, Output } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public routingService: RoutingService) {}

  // ダークモードの適用状態（true: ダークモード, false: ライトモード）
  public isDarkMode: boolean = false;

  // ダークモードの適用状態を親コンポーネントに渡す用のEventEmitter
  @Output() darkModeEvent = new EventEmitter<boolean>();

  public toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeEvent.emit(this.isDarkMode);
    localStorage['theme'] = this.isDarkMode ? 'dark' : 'light';
  }

  ngOnInit() {
    if (localStorage['theme'] == 'dark') {
      this.isDarkMode = true;
    }
  }

  public moveToHome() {
    this.routingService.moveToHome();
  }
}
