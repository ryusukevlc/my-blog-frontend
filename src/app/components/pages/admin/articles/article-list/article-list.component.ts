import { Component } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ResponseBody } from 'src/app/models/response-body.model';
import { ArticleListService } from 'src/app/services/pages/admin/article-list/article-list.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  constructor(
    private articleListService: ArticleListService,
    public routingService: RoutingService
  ) {}

  public articles: Article[];

  private fields: string[] = [
    'id',
    'title',
    'content',
    'created_at',
    'updated_at',
    'writing',
  ];

  async ngOnInit(): Promise<void> {
    this.articleListService
      .getArticles(...this.fields)
      .subscribe((responseBody: object) => {
        this.articles = JSON.parse(responseBody.toString()).data;
      });
  }
}
