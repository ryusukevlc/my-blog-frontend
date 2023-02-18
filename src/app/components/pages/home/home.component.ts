import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { HomeService } from 'src/app/services/pages/home/home.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private homeService: HomeService,
    public routingService: RoutingService
  ) {}

  public articles: Article[];

  async ngOnInit(): Promise<void> {
    this.articles = await this.homeService.getArticles();
  }
}
