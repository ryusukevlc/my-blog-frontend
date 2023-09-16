import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleApiService } from 'src/app/api/interface/article-api.service';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleResolverService {
  constructor(private articleApiService: ArticleApiService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    if (route.routeConfig?.path == 'admin/editArticle') {
      // 記事編集時はmarkdownで表示するため、isMarkdownをtrueにする
      return this.articleApiService.getArticleDetail(
        Number(route.queryParams['id']),
        true
      );
    } else {
      // 記事詳細表示時
      return this.articleApiService.getArticleDetail(
        Number(route.queryParams['id'])
      );
    }
  }
}
