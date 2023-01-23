import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleDetailService } from 'src/app/services/pages/article-detail.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent {
  constructor(
    private articleDetailService: ArticleDetailService,
    private route: ActivatedRoute
  ) {}

  private id: number;

  public article: Article;

  ngOnInit() {
    //クエリパラメータからidを取得
    this.route.queryParams.subscribe((params) => {
      this.id = Number(params['id']);
    });

    //記事の詳細を取得
    this.articleDetailService
      .getArticleDetail(this.id)
      .then((article) => (this.article = article));
  }
}
