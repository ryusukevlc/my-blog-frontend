import { Injectable } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailService {
  constructor(private articleService: ArticleService) {}
}
