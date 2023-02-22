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

  /**
   * ngOnInit
   */
  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.data.subscribe((data) => {
      this.article = data['responseBody'].data;
    });
  }
}
