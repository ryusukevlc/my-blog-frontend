import { Injectable } from '@angular/core';
import { ArticleApiService } from 'src/app/api/interface/article-api.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailService {
  constructor(private articleApiService: ArticleApiService) {}
}
