import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { HomeService } from 'src/app/services/pages/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public articles: Article[];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.homeService
      .getArticles()
      .then((articles) => (this.articles = articles));
    console.log('hello');
  }

  /**
   * ブログ記事詳細に遷移
   * @param articleId
   */
  public moveToArticleDetail(articleId: number) {
    this.router.navigate(['detail'], {
      queryParams: { id: articleId.toString() },
    });
  }
}
