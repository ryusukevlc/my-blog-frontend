import { Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';
import { PortalService } from './portal.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
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
      case 'settings':
        console.log('test');
        break;
      case 'analytics':
        console.log('test');
        break;
      default:
        console.log('not found page');
        break;
    }
  }
}
