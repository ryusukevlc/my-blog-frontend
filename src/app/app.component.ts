import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @HostBinding('class.dark') isDarkMode: boolean = false;
  title = 'my-blog-frontend';

  public toggleDarkmode(darkModeStatus: boolean) {
    this.isDarkMode = darkModeStatus;
  }

  ngOnInit() {
    if (localStorage['theme'] == 'dark') {
      this.isDarkMode = true;
    }
  }
}
