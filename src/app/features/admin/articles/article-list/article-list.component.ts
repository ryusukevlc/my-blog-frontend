import { Component } from '@angular/core';
import { Article } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent {
  constructor(
    private articleService: ArticleService,
    public routingService: RoutingService
  ) {}

  public articles: Article[];

  private fields: string[] = [
    'id',
    'title',
    'createdAt',
    'updatedAt',
    'isWriting',
    'partOfContent',
  ];

  public async ngOnInit(): Promise<void> {
    this.articleService
      .getArticles(0, 10, ...this.fields)
      .subscribe(articles => {
        this.articles = this.processArticlesForDisplay(articles);
      });
  }

  public showPopup(articleId: number) {
    confirm('削除しますか？')
      ? this.deleteArticle(articleId)
      : console.log('削除しませんでした。');
  }

  public deleteArticle(articleId: number) {
    this.articleService.deleteArticle(articleId).subscribe(() => {
      location.reload();
      alert('削除しました');
    });
  }

  public moveToCreateArticle() {
    this.routingService.moveToCreateArticle();
  }

  public moveToEditArticle(articleId: number) {
    this.routingService.moveToEditArticle(articleId);
  }

  private processArticlesForDisplay(articles: Article[]): Article[] {
    return articles.map(article => {
      article.createdAt = article.createdAt.substring(0, 10);
      article.updatedAt = article.updatedAt?.substring(0, 10);
      article.partOfContent = article.partOfContent.substring(0, 50);
      return article;
    });
  }
}
