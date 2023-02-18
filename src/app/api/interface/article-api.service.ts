import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from 'src/app/constants/urls';
import { Article } from 'src/app/models/article.model';
import { ResponseBody } from 'src/app/models/response-body.model';
import { HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleApiService {
  constructor(private http: HttpClient) {}

  /**
   * 記事を取得する
   *
   * @param offset オフセット（何件目以降の記事を取得するか）
   * @param count 取得する件数（0を指定した場合は全件取得する）
   * @param fields 取得するフィールド
   * @returns
   */
  public getArticles(
    offset: number,
    count: number,
    ...fields: string[]
  ): Observable<ResponseBody<Article[]>> {
    // パラメータ
    let options = {
      params: new HttpParams().set('offset', offset).set('count', count),
    };
    // 取得するフィールドをパラメータにセットする
    fields.forEach((field: string) => {
      options.params = options.params.append('fields', field);
    });
    // httpリクエスト
    return this.http.get<ResponseBody<Article[]>>(Urls.ARTICLES_URL, options);
  }

  /**
   * ブログ記事詳細取得API
   */
  public getArticleDetail(id: number): Promise<Article> {
    let url = new URL(Urls.ARTICLE_DETAIL_URL);
    url.searchParams.append('id', id.toString());

    return fetch(url)
      .then((response: Response) => response.json())
      .then((body: ResponseBody<Article>) => {
        console.log(body.data);
        return body.data;
      });
  }
}
