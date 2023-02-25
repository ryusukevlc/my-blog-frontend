import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleApiService } from 'src/app/api/interface/article-api.service';
import { Article } from 'src/app/models/article.model';
import { ResponseBody } from 'src/app/models/response-body.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleListService {
  constructor(private articleApiService: ArticleApiService) {}

  /**
   * ブログ記事取得
   * @returns
   */
  public getArticles(
    offset: number,
    count: number,
    ...fields: string[]
  ): Observable<ResponseBody<Article[]>> {
    return this.articleApiService.getArticles(offset, count, ...fields);
  }

  public deleteArticle(id: number) {
    return this.articleApiService.deleteArticle(id);
  }
}
