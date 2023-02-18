import { Injectable } from '@angular/core';
import { ArticleApiService } from 'src/app/api/interface/article-api.service';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleListService {
  constructor(private articleApiService: ArticleApiService) {}

  /**
   * ブログ記事取得
   * @returns
   */
  public async getArticles(): Promise<Article[]> {
    return await this.articleApiService.getArticles();
  }
}
