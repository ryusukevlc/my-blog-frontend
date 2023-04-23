import { Injectable } from '@angular/core';
import { ArticleApiService } from 'src/app/api/interface/article-api.service';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  constructor(private articleApiService: ArticleApiService) {}

  public createArticle(value: Object) {
    return this.articleApiService.createArticle(value);
  }
}
