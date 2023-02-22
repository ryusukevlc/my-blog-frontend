import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleApiService } from 'src/app/api/interface/article-api.service';
import { Article } from 'src/app/models/article.model';
import { ResponseBody } from 'src/app/models/response-body.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleResolverService {
  constructor(private articleApiService: ArticleApiService) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<ResponseBody<Article>> {
    return this.articleApiService.getArticleDetail(
      Number(route.queryParams['id'])
    );
  }
}
