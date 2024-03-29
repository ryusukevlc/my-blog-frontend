import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserArticle } from 'src/app/components/user/user-articles/user-article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent {
  constructor(private route: ActivatedRoute) {}

  // 記事
  public article: UserArticle;

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
