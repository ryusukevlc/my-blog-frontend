import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { HomeService } from 'src/app/services/pages/home.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public articles: Article[];

  constructor(
    private homeService: HomeService,
    public routingService: RoutingService
  ) {}

  ngOnInit(): void {
    this.homeService
      .getArticles()
      .then((articles) => (this.articles = articles));
    console.log('hello');
  }
}
