import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/core/constants/urls';
import { AdminArticle } from 'src/app/components/admin/articles/admin-article.model';
import { AdminArticleCount } from 'src/app/components/admin/articles/admin-article-count.model';
import { SharedArticleService } from 'src/app/shared/shared-services/shared-article.service';

@Injectable({
  providedIn: 'root',
})
export class AdminArticleService {
  constructor(
    private http: HttpClient,
    private sharedArticleService: SharedArticleService
  ) {}

  public getArticles(
    offset: number,
    count: number,
    ...fields: string[]
  ): Observable<AdminArticle[]> {
    return this.sharedArticleService.getArticles(offset, count, ...fields);
  }

  public getArticleDetail(
    id: number,
    isMarkdown: boolean = false
  ): Observable<any> {
    return this.sharedArticleService.getArticleDetail(id, isMarkdown);
  }

  public getArticleCount(): Observable<AdminArticleCount> {
    return this.sharedArticleService.getArticleCount();
  }

  public createArticle(value: Object) {
    const options = {
      reportProgress: true,
    };
    return this.http.post<AdminArticle>(
      Urls.ARTICLE_API.ARTICLES_URL,
      value,
      options
    );
  }

  public updateArticle(value: Object) {
    const options = {
      reportProgress: true,
    };
    return this.http.patch<AdminArticle>(
      Urls.ARTICLE_API.ARTICLES_URL,
      value,
      options
    );
  }

  public deleteArticle(articleId: number) {
    return this.http.delete<void>(
      Urls.ARTICLE_API.ARTICLES_URL + '/' + articleId.toString(),
      {}
    );
  }
}
