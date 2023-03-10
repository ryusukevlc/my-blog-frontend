import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  resolveForwardRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleListService } from 'src/app/services/pages/admin/article-list/article-list.service';
import { RoutingService } from 'src/app/services/routing/routing.service';
import { Datetime } from 'src/app/util/Datetime';

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
    'writing',
    'partOfContent',
  ];

  async ngOnInit(): Promise<void> {
    // 記事を全件取得するために第2引数のcountを0に設定している
    this.articleListService
      .getArticles(0, 0, ...this.fields)
      .subscribe((responseBody) => {
        let articles = responseBody.data;
        articles.forEach((article) => {
          // 配列形式の日付をハイフン形式の日付にコンバートする
          article.created_at = new Datetime().convertJacksonTime(
            Array.from(article.created_at)
          );
          if (article.updated_at != undefined || article.updated_at != null) {
            article.updated_at = new Datetime().convertJacksonTime(
              Array.from(article.updated_at)
            );
          }
          article.partOfContent = article.partOfContent.slice(0, 50);
        });
        this.articles = articles;
      });
  }

  public displayPopup(id: number) {
    let result = confirm('削除しますか?');
    if (result) {
      console.log('削除ボタンを押しました');
      this.deleteArticle(id);
    } else {
      console.log('削除しませんでした');
    }
  }

  public deleteArticle(id: number) {
    console.log('削除メソッドを呼びました');
    this.articleListService.deleteArticle(id).subscribe((responseBody) => {
      console.log(responseBody.status);
      location.reload();
      alert('削除しました');
    });
  }
}
