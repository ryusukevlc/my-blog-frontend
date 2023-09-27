import { Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {
  constructor(public routingService: RoutingService) {}

  public moveToArticleList() {
    this.routingService.moveToArticleList();
  }

  public moveToTags() {
    this.routingService.moveToTags();
  }

  public moveToDrafts() {
    this.routingService.moveToDrafts();
  }
}
