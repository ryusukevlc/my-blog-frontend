import { Injectable } from '@angular/core';
import { ArticleApiService } from 'src/app/api/interface/article-api.service';

@Injectable({
  providedIn: 'root',
})
export class EditArticleService {
  constructor(private articleApiService: ArticleApiService) {}

  public updateArticle(value: Object) {
    return this.articleApiService.updateArticle(value);
  }
}
