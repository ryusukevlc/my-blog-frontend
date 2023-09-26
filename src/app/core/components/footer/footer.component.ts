import { Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public routingService: RoutingService) {}
}
