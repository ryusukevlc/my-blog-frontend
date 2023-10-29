import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/core/constants/urls';
import { Article } from 'src/app/shared/interfaces/article.interface';
import { ArticleCount } from 'src/app/shared/interfaces/article-count.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedArticleService {
  constructor(private http: HttpClient) {}

  public getArticles(
    offset: number,
    count: number,
    ...fields: string[]
  ): Observable<Article[]> {
    const options = {
      params: new HttpParams().set('offset', offset).set('limit', count),
      reportProgress: true,
    };
    fields.forEach((field: string) => {
      options.params = options.params.append('fields', field);
    });
    return this.http.get<Article[]>(Urls.ARTICLE_API.ARTICLES_URL, options);
  }

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
    return this.http.get(
      Urls.ARTICLE_API.ARTICLES_URL + '/' + id.toString(),
      options
    );
  }

  public getArticleCount() {
    return this.http.get<ArticleCount>(Urls.ARTICLE_API.ARTICLES_COUNT_URL, {});
  }
}
