import { Injectable } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.service';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  constructor(private articleService: ArticleService) {}

  public createArticle(value: Object) {
    return this.articleService.createArticle(value);
  }
}
