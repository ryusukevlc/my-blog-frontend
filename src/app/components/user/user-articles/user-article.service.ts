import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedArticleService } from 'src/app/shared/shared-services/shared-article.service';

@Injectable({
  providedIn: 'root',
})
export class UserArticleService extends SharedArticleService {
  constructor(http: HttpClient) {
    super(http);
  }
}
