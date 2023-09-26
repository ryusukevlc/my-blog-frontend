import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/core/services/article.service';
import { Article } from 'src/app/core/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleListService {
  constructor(private articleService: ArticleService) {}

  /**
   * ブログ記事取得
   * @returns
   */
  public getArticles(
    offset: number,
    count: number,
    ...fields: string[]
  ): Observable<Article[]> {
    return this.articleService.getArticles(offset, count, ...fields);
  }

  public deleteArticle(id: number) {
    return this.articleService.deleteArticle(id);
  }
}
