import { Component } from '@angular/core';
import { RoutingService } from 'src/app/core/core-services/routing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(public routingService: RoutingService) {}
}
