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

  ngOnInit(): void {
    // 記事一覧を取得する
    this.homeService
      .getArticles(0, this.count, ...this.fields)
      .subscribe((responseBody) => {
        let articles: Article[] = responseBody.data;
        articles.forEach((article) => {
          article.created_at = new Datetime().convertJacksonTime(
            Array.from(article.created_at)
          );
        });
        this.articles = articles;
      });

    // 記事の全件数を取得する
    this.homeService.getArticleCount().subscribe((responseBody) => {
      console.log('hello');
      let count: Count = responseBody.data;
      console.log('hello2');
      this.pageCount = Math.ceil(count.allArticleNumbers / this.count);
      this.pageNumberArray = new Array(this.pageCount);
      console.log(this.pageCount);
      for (let i = 1; i <= this.pageCount; i++) {
        console.log(i);
        console.log(this.pageNumberArray);
        this.pageNumberArray[i] = i;
      }
      console.log(this.pageNumberArray);
      console.log(this.pageCount);
    });
  }

  public movePage(number: number) {
    window.scrollTo(0, 0);
    this.selectedNumber = number;
    this.homeService
      .getArticles(
        this.count * (this.selectedNumber - 1) + 1,
        this.count,
        ...this.fields
      )
      .subscribe((responseBody) => {
        let articles: Article[] = responseBody.data;
        articles.forEach((article) => {
          article.created_at = new Datetime().convertJacksonTime(
            Array.from(article.created_at)
          );
        });
        this.articles = articles;
      });
  }
}
