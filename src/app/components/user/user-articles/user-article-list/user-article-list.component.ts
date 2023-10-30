import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserArticle } from 'src/app/components/user/user-articles/user-article.model';
import { UserArticleCount } from 'src/app/components/user/user-articles/user-article-count.model';
import { UserArticleService } from 'src/app/components/user/user-articles/user-article.service';
import { RoutingService } from 'src/app/core/core-services/routing.service';

@Component({
  selector: 'app-user-article-list',
  templateUrl: './user-article-list.component.html',
})
export class UserArticleListComponent {
  constructor(
    private articleService: UserArticleService,
    public routingService: RoutingService
  ) {}

  // 1ページあたりの記事表示数
  private static readonly NUMBER_OF_DISPLAYS: number = 10;

  public articles: UserArticle[];
  public selectedPageNumber: number = 1;
  public skeletonScreen: boolean = false;
  private fields = ['id', 'title', 'partOfContent', 'createdAt'];

  // ページ番号の配列
  public pageNumberArray: number[] = [];

  public ngOnInit(): void {
    this.skeletonScreen = true;
    this.getArticles(0).subscribe(articles => {
      this.articles = articles;
      this.skeletonScreen = false;
    });
    this.getPageNumber();
  }

  public moveToArticleDetail(articleId: number) {
    this.routingService.moveToArticleDetail(articleId);
  }

  public movePreviousPage() {
    if (this.selectedPageNumber == 1) return;
    this.movePage(this.selectedPageNumber - 1);
  }

  public moveNextPage() {
    if (
      this.selectedPageNumber ==
      this.pageNumberArray[this.pageNumberArray.length - 1]
    )
      return;
    this.movePage(this.selectedPageNumber + 1);
  }

  public movePage(pageNumber: number) {
    this.articles = [];
    this.skeletonScreen = true;
    window.scrollTo(0, 0);
    this.selectedPageNumber = pageNumber;
    this.getArticles(
      UserArticleListComponent.NUMBER_OF_DISPLAYS *
        (this.selectedPageNumber - 1)
    ).subscribe(articles => {
      this.articles = articles;
      this.skeletonScreen = false;
    });
  }

  private getArticles(offset: number): Observable<UserArticle[]> {
    return this.articleService
      .getArticles(
        offset,
        UserArticleListComponent.NUMBER_OF_DISPLAYS,
        ...this.fields
      )
      .pipe(map(articles => this.processArticlesForDisplay(articles)));
  }

  private processArticlesForDisplay(articles: UserArticle[]): UserArticle[] {
    return articles.map(article => {
      article.createdAt = article.createdAt.substring(0, 10);
      return article;
    });
  }

  private getPageNumber(): void {
    this.articleService.getArticleCount().subscribe(count => {
      this.setPageNumber(this.getPageCount(count));
    });
  }

  private getPageCount(count: UserArticleCount): number {
    return Math.ceil(
      count.allArticleNumbers / UserArticleListComponent.NUMBER_OF_DISPLAYS
    );
  }

  private setPageNumber(pageCount: number): void {
    for (let i = 1; i <= pageCount; i++) {
      this.pageNumberArray[i - 1] = i;
    }
  }
}
