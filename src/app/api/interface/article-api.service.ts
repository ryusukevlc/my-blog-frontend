import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/constants/urls';
import { Article } from 'src/app/core/models/article.model';
import { Count } from 'src/app/core/models/count.model';

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
    const options = {
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
  public getArticleDetail(
    id: number,
    isMarkdown: boolean = false
  ): Observable<any> {
    const options = {
      params: new HttpParams(),
      reportProgress: true,
    };
    if (isMarkdown) {
      options.params = options.params.append('markdown', true);
    }

    return this.http.get(Urls.ARTICLES_URL + '/' + id.toString(), options);
  }

  public getArticleCount() {
    return this.http.get<Count>(Urls.ARTICLES_COUNT_URL, {});
  }

  public createArticle(value: Object) {
    const options = {
      reportProgress: true,
    };
    return this.http.post<Article>(Urls.ARTICLES_URL, value, options);
  }

  public updateArticle(value: Object) {
    const options = {
      reportProgress: true,
    };
    return this.http.patch<Article>(Urls.ARTICLES_URL, value, options);
  }

  public deleteArticle(articleId: number) {
    return this.http.delete<void>(
      Urls.ARTICLES_URL + '/' + articleId.toString(),
      {}
    );
  }
}
