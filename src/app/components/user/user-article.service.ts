import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserArticle } from 'src/app/components/user/user-article.model';
import { UserArticleCount } from 'src/app/components/user/user-article-count.model';
import { SharedArticleService } from 'src/app/shared/shared-services/shared-article.service';

@Injectable({
  providedIn: 'root',
})
export class UserArticleService {
  constructor(
    private http: HttpClient,
    private sharedArticleService: SharedArticleService
  ) {}

  public getArticles(
    offset: number,
    count: number,
    ...fields: string[]
  ): Observable<UserArticle[]> {
    return this.sharedArticleService.getArticles(offset, count, ...fields);
  }

  public getArticleDetail(
    id: number,
    isMarkdown: boolean = false
  ): Observable<any> {
    return this.sharedArticleService.getArticleDetail(id, isMarkdown);
  }

  public getArticleCount(): Observable<UserArticleCount> {
    return this.sharedArticleService.getArticleCount();
  }
}
