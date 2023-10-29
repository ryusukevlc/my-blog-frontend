import { ArticleCount } from 'src/app/shared/interfaces/article-count.interface';

export class AdminArticleCount implements ArticleCount {
  constructor(allArticleNumbers: number) {
    this.allArticleNumbers = allArticleNumbers;
  }

  public allArticleNumbers: number;
}
