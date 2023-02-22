import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleDetailService } from 'src/app/services/pages/article-detail/article-detail.service';
import { Datetime } from 'src/app/util/Datetime';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent {
  constructor(private route: ActivatedRoute) {}

  // 記事
  public article: Article;

  // 更新有無ステータス
  public isupdated: boolean = false;

  /**
   * ngOnInit
   */
  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.data.subscribe((data) => {
      let article = data['responseBody'].data;

      article.created_at = new Datetime().convertJacksonTime(
        Array.from(article.created_at)
      );

      if (article.updated_at != undefined || article.updated_at != null) {
        article.updated_at = new Datetime().convertJacksonTime(
          Array.from(article.updated_at)
        );
        this.isupdated = true;
      }
      this.article = article;
    });
  }

  public sortByTag(tagname: string) {}
}
