import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserArticle } from 'src/app/components/user/user-article.model';
import { UserArticleCount } from 'src/app/components/user/user-article-count.model';
import { SharedArticleService } from 'src/app/shared/shared-services/shared-article.service';

@Injectable({
  providedIn: 'root',
})
export class UserArticleService extends SharedArticleService {
  constructor(http: HttpClient) {
    super(http);
  }
}
