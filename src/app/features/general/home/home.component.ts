import { Component } from '@angular/core';
import { Article } from 'src/app/core/models/article.model';
import { Count } from 'src/app/core/models/count.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private articleService: ArticleService,
    public routingService: RoutingService
  ) {}

  // 1ページあたりの記事表示数
  private static readonly NUMBER_OF_DISPLAYS: number = 10;

  public articles: Article[];
  public selectedPageNumber: number = 1;
  public skeletonScreen: boolean = false;
  private fields = ['id', 'title', 'part_of_content', 'created_at'];

  // ページ番号の配列
  public pageNumberArray: number[] = [];

  public ngOnInit(): void {
    this.skeletonScreen = true;

    this.articleService
      .getArticles(0, HomeComponent.NUMBER_OF_DISPLAYS, ...this.fields)
      .subscribe(articles => {
        this.articles = this.processArticlesForDisplay(articles);
        this.skeletonScreen = false;
      });

    this.articleService.getArticleCount().subscribe(count => {
      this.setPageNumber(this.getPageCount(count));
    });
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

    this.articleService
      .getArticles(
        HomeComponent.NUMBER_OF_DISPLAYS * (this.selectedPageNumber - 1),
        HomeComponent.NUMBER_OF_DISPLAYS,
        ...this.fields
      )
      .subscribe(articles => {
        this.articles = this.processArticlesForDisplay(articles);
        this.skeletonScreen = false;
      });
  }

  public moveToArticleDetail(articleId: number) {
    this.routingService.moveToArticleDetail(articleId);
  }

  private processArticlesForDisplay(articles: Article[]): Article[] {
    return articles.map(article => {
      article.createdAt = article.createdAt.substring(0, 10);
      return article;
    });
  }

  private getPageCount(count: Count): number {
    return Math.ceil(
      count.allArticleNumbers / HomeComponent.NUMBER_OF_DISPLAYS
    );
  }

  private setPageNumber(pageCount: number): void {
    for (let i = 1; i <= pageCount; i++) {
      this.pageNumberArray[i - 1] = i;
    }
  }
}
