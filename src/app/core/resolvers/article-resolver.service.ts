import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/interfaces/article.interface';
import { SharedArticleService } from 'src/app/shared/shared-services/shared-article.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleResolverService {
  constructor(private sharedArticleService: SharedArticleService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    if (route.routeConfig?.path == 'admin/editArticle') {
      // 記事編集時はmarkdownで表示するため、isMarkdownをtrueにする
      return this.sharedArticleService.getArticleDetail(
        Number(route.queryParams['id']),
        true
      );
    } else {
      // 記事詳細表示時
      return this.sharedArticleService.getArticleDetail(
        Number(route.queryParams['id'])
      );
    }
  }
}
