import { environment } from 'src/app/core/environments/environment';

export class Urls {
  private static readonly END_POINT = environment.apiEndpoint;

  public static readonly ARTICLE_API = {
    ARTICLES_URL: this.END_POINT + '/articles',
    ARTICLES_COUNT_URL: this.END_POINT + '/articles/count',
    ARTICLE_URL: this.END_POINT + '/article',
  };

  public static readonly TAG_API = {
    TAGS_URL: this.END_POINT + '/tags',
  };

  public static readonly LOGIN_API = {
    LOGIN_URL: this.END_POINT + '/login',
  };
}
