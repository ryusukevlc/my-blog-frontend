import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/core/services/article.service';
import { Article } from 'src/app/core/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleResolverService {
  constructor(private articleService: ArticleService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    if (route.routeConfig?.path == 'admin/editArticle') {
      // 記事編集時はmarkdownで表示するため、isMarkdownをtrueにする
      return this.articleService.getArticleDetail(
        Number(route.queryParams['id']),
        true
      );
    } else {
      // 記事詳細表示時
      return this.articleService.getArticleDetail(
        Number(route.queryParams['id'])
      );
    }
  }
}
