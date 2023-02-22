import { Injectable } from '@angular/core';
import { ArticleApiService } from 'src/app/api/interface/article-api.service';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailService {
  constructor(private articleApiService: ArticleApiService) {}
}
