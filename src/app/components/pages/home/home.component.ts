import { Component } from '@angular/core';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public articles: Article[];

  ngOnInit() {
    this.articles = [
      new Article(
        'Boost your conversion rate',
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totamvitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        new Date(),
        new Date()
      ),
      new Article(
        'Boost your conversion rate',
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totamvitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        new Date(),
        new Date()
      ),
      new Article(
        'Boost your conversion rate',
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totamvitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        new Date(),
        new Date()
      ),
      new Article(
        'Boost your conversion rate',
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totamvitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        new Date(),
        new Date()
      ),
    ];
  }
}
