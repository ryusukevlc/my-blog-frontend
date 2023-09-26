import { Injectable } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.service';

@Injectable({
  providedIn: 'root',
})
export class EditArticleService {
  constructor(private articleService: ArticleService) {}

  public updateArticle(value: Object) {
    return this.articleService.updateArticle(value);
  }
}
