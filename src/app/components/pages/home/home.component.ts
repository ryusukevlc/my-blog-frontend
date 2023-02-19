import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ResponseBody } from 'src/app/models/response-body.model';
import { HomeService } from 'src/app/services/pages/home/home.service';
import { RoutingService } from 'src/app/services/routing/routing.service';
import { Datetime } from 'src/app/util/Datetime';

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

  private fields = ['id', 'title', 'partOfContent', 'created_at'];
  private offset: number = 0;
  private count: number = 10;

  ngOnInit(): void {
    this.homeService
      .getArticles(0, this.count, ...this.fields)
      .subscribe((responseBody) => {
        let articles: Article[] = responseBody.data;
        articles.forEach((article) => {
          article.created_at = new Datetime().convertJacksonTime(
            Array.from(article.created_at)
          );
        });
        this.articles = articles;
      });
  }
}
