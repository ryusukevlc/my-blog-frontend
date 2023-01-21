import { Injectable } from '@angular/core';
import { Urls } from 'src/app/constants/urls';
import { Article } from 'src/app/models/article.model';
import { ResponseBody } from 'src/app/models/response-body.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleApiService {
  constructor() {}

  /**
   * ブログ記事一覧取得API
   */
  public getArticles(): Promise<Article[]> {
    return fetch(Urls.ARTICLES_URL)
      .then((response: Response) => response.json())
      .then((body: ResponseBody<Article[]>) => body.data);
  }

  /**
   * ブログ記事詳細取得API
   */
  public getArticleDetail(id: number): Promise<Article> {
    return fetch(Urls.ARTICLE_DETAIL_URL)
      .then((response: Response) => response.json())
      .then((body: ResponseBody<Article>) => body.data);
  }
}
