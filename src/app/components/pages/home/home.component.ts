import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { Count } from 'src/app/models/count.model';
import { ResponseBody } from 'src/app/models/response-body.model';
import { HomeService } from 'src/app/services/pages/home/home.service';
import { RoutingService } from 'src/app/services/routing/routing.service';
import { Datetime } from 'src/app/util/Datetime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private homeService: HomeService,
    public routingService: RoutingService
  ) {}

  // 記事一覧
  public articles: Article[];
  // ページ番号の配列
  public pageNumberArray: number[];
  // 現在表示しているページの番号
  public selectedNumber: number = 1;
  // ページ件数
  public pageCount: number;
  // APIから取得するフィールド
  private fields = ['id', 'title', 'partOfContent', 'created_at'];
  // 何記事目から取得するか決めるオフセット
  private offset: number = 0;
  // 取得する記事の件数
  private count: number = 10;
  // スケルトンスクリーンの表示制御（true: スケルトンスクリーンを表示する, false: 表示しない）
  public skeletonScreen: boolean = false;

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    // スケルトンスクリーンON
    this.skeletonScreen = true;
    // 記事一覧を取得する
    this.homeService
      .getArticles(0, this.count, ...this.fields)
      .subscribe((responseBody) => {
        let articles: Article[] = responseBody.data;
        articles.forEach((article) => {
          // 配列形式の日付をハイフン形式の日付にコンバートする
          article.created_at = new Datetime().convertJacksonTime(
            Array.from(article.created_at)
          );
        });
        this.articles = articles;

        // スケルトンスクリーンOFF
        this.skeletonScreen = false;
      });

    // 記事（下書き以外）の全件数を取得する
    this.homeService.getArticleCount().subscribe((responseBody) => {
      let count: Count = responseBody.data;
      this.pageCount = Math.ceil(count.allArticleNumbers / this.count);
      this.pageNumberArray = new Array(this.pageCount);
      for (let i = 1; i <= this.pageCount; i++) {
        this.pageNumberArray[i] = i;
      }
    });
  }

  /**
   * 前のページに遷移
   * @returns
   */
  public movePreviousPage() {
    if (this.selectedNumber == 1) return;
    this.movePage(this.selectedNumber - 1);
  }

  /**
   * 次のページに遷移
   * @returns
   */
  public moveNextPage() {
    if (this.selectedNumber == this.pageCount) return;
    this.movePage(this.selectedNumber + 1);
  }

  /**
   * 記事詳細画面に遷移する
   * @param articleId
   */
  public moveToArticleDetail(articleId: number) {
    console.log(articleId);
    this.router.navigate(['detail'], {
      queryParams: { id: articleId.toString() },
    });
  }

  /**
   * ページング処理
   * @param number
   */
  public movePage(number: number) {
    // スケルトンスクリーンを表示するために記事一覧を空にする
    this.articles = [];
    // スケルトンスクリーンON
    this.skeletonScreen = true;
    // ページ番号クリック時にページの一番上に移動する
    window.scrollTo(0, 0);
    // 選択したページの番号を保持する
    this.selectedNumber = number;
    // 記事を取得する
    this.homeService
      .getArticles(
        this.count * (this.selectedNumber - 1),
        this.count,
        ...this.fields
      )
      .subscribe((responseBody) => {
        let articles: Article[] = responseBody.data;
        articles.forEach((article) => {
          // 配列形式の日付をハイフン形式の日付にコンバートする
          article.created_at = new Datetime().convertJacksonTime(
            Array.from(article.created_at)
          );
        });
        this.articles = articles;
        // スケルトンスクリーンOFF
        this.skeletonScreen = false;
      });
  }
}
