import { Component } from '@angular/core';
import { RoutingService } from 'src/app/core/core-services/routing.service';
import { PortalService } from './portal.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
})
export class PortalComponent {
  constructor(
    public routingService: RoutingService,
    public portalService: PortalService
  ) {}

  public menuItems: any;

  ngOnInit() {
    this.menuItems = this.portalService.getMenuItems();
  }

  public navigateToPage(pageTitle: string): void {
    switch (pageTitle) {
      case 'Articles':
        this.routingService.moveToArticleList();
        break;
      case 'Tags':
        this.routingService.moveToTags();
        break;
      case 'Drafts':
        this.routingService.moveToDrafts();
        break;
      case 'Settings':
        this.routingService.moveToSettings();
        break;
      case 'Analytics':
        this.routingService.moveToAnalytics();
        break;
      default:
        break;
    }
  }
}
