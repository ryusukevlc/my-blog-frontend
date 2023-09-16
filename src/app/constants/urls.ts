import { environment } from 'src/environments/environment';

export class Urls {
  // APIエンドポイント
  private static readonly API_URL = environment.apiEndpoint;

  // -----------------------------------------------------------------
  // API名
  // -----------------------------------------------------------------

  // ブログ記事API
  private static readonly ARTICLES = '/articles';

  // 件数取得API
  private static readonly COUNT = '/count';

  // ブログ記事詳細API
  public static readonly ARTICLE = '/article';

  // タグAPI
  private static readonly TAGS = '/tags';

  // ログインAPI
  private static readonly LOGIN = '/login';

  // 記事編集API
  public static readonly EDIT_ARTICLE = 'admin/editArticle';

  // -----------------------------------------------------------------
  // URL
  // -----------------------------------------------------------------

  // ブログ記事URL
  public static readonly ARTICLES_URL = this.API_URL + this.ARTICLES;

  // ブログ記事件数取得URL
  public static readonly ARTICLES_COUNT_URL =
    this.API_URL + this.ARTICLES + this.COUNT;

  // ブログ記事詳細URL
  public static readonly ARTICLE_URL = this.API_URL + this.ARTICLE;

  // タグURL
  public static readonly TAGS_URL = this.API_URL + this.TAGS;

  // ログインURL
  public static readonly LOGIN_URL = this.API_URL + this.LOGIN;
}
