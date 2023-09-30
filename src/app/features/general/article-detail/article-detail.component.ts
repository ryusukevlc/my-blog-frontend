import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/core/models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent {
  constructor(private route: ActivatedRoute) {}

  // 記事
  public article: Article;

  // 更新有無ステータス
  public isupdated: boolean = false;

  public ngOnInit() {
    window.scrollTo(0, 0);
    this.route.data.subscribe(data => {
      const article = data['article'];
      article.createdAt = article.createdAt.substring(0, 10);
      if (article.updatedAt != undefined || article.updatedAt != null) {
        article.updatedAt = article.updatedAt.substring(0, 10);
        this.isupdated = true;
      }
      this.article = article;
    });
  }

  public sortByTag(tagname: string) {}
}
