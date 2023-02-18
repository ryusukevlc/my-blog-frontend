import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ResponseBody } from 'src/app/models/response-body.model';
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

  private fields = ['id', 'title', 'content', 'created_at'];
  private offset: number = 0;
  private count: number = 0;

  ngOnInit(): void {
    this.homeService
      .getArticles(0, this.count, ...this.fields)
      .subscribe((responseBody) => {
        this.articles = responseBody.data;
      });
  }
}
