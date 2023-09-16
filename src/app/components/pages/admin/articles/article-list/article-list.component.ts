import { Component } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleListService } from 'src/app/services/pages/admin/article-list/article-list.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  constructor(
    private articleListService: ArticleListService,
    public routingService: RoutingService
  ) {}

  public articles: Article[];

  private fields: string[] = [
    'id',
    'title',
    'created_at',
    'updated_at',
    'is_writing',
    'part_of_content',
  ];

  async ngOnInit(): Promise<void> {
    // 記事を全件取得するために第2引数のcountを0に設定している
    this.articleListService
      .getArticles(0, 10, ...this.fields)
      .subscribe((articles) => {
        articles.forEach((article) => {
          article.createdAt = article.createdAt.substring(0, 10);
          if (article.updatedAt != undefined || article.updatedAt != null) {
            article.updatedAt = article.updatedAt.substring(0, 10);
          }
          article.partOfContent = article.partOfContent.slice(0, 50);
        });
        this.articles = articles;
      });
  }

  public displayPopup(id: number) {
    const result = confirm('削除しますか?');
    if (result) {
      this.deleteArticle(id);
    } else {
      console.log('削除しませんでした');
    }
  }

  public deleteArticle(id: number) {
    this.articleListService.deleteArticle(id).subscribe(() => {
      location.reload();
      alert('削除しました');
    });
  }
}
