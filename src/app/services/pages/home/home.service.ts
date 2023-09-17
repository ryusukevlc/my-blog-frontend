import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleApiService } from 'src/app/api/interface/article-api.service';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private articleApiService: ArticleApiService) {}

  /**
   * ブログ記事取得
   * @returns
   */
  public getArticles(
    offset: number,
    count: number,
    ...fields: string[]
  ): Observable<Article[]> {
    return this.articleApiService.getArticles(offset, count, ...fields);
  }

  public getArticleCount() {
    return this.articleApiService.getArticleCount();
  }
}
