import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from 'src/app/constants/urls';
import { Article } from 'src/app/models/article.model';
import { ResponseBody } from 'src/app/models/response-body.model';
import { HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Count } from 'src/app/models/count.model';

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
  ): Observable<Article[]> {
    // パラメータ
    let options = {
      params: new HttpParams().set('offset', offset).set('limit', count),
      reportProgress: true,
    };
    // 取得するフィールドをパラメータにセットする
    fields.forEach((field: string) => {
      options.params = options.params.append('fields', field);
    });
    // httpリクエスト
    return this.http.get<Article[]>(Urls.ARTICLES_URL, options);
  }

  /**
   * ブログ記事詳細取得API
   */
  public getArticleDetail(id: number): Observable<any> {
    return this.http.get(Urls.ARTICLES_URL + '/' + id.toString(), {
      reportProgress: true,
    });
  }

  public getArticleCount() {
    return this.http.get<Count>(Urls.ARTICLES_COUNT_URL, {});
  }

  public createArticle(value: Object) {
    let options = {
      reportProgress: true,
    };
    console.log(value);
    return this.http.post<ResponseBody<any>>(Urls.ARTICLES_URL, value, options);
  }

  public updateArticle(value: Object) {
    let options = {
      reportProgress: true,
    };
    console.log(value);
    return this.http.post<ResponseBody<any>>(Urls.ARTICLES_URL, value, options);
  }

  public deleteArticle(articleId: number) {
    return this.http.post<ResponseBody<any>>(Urls.ARTICLES_URL, {
      action: 'delete',
      id: articleId,
    });
  }
}
