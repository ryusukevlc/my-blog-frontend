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
export class AdminArticleService extends SharedArticleService {
  constructor(http: HttpClient) {
    super(http);
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
