import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private router: Router) {}

  /**
   * ホーム画面に遷移する
   */
  public moveToHome() {
    this.router.navigate(['']);
  }

  /**
   * 管理者ポータル画面に遷移する
   *
   */
  public moveToPortal() {
    this.router.navigate(['admin/portal']);
  }

  /**
   * 記事一覧画面に遷移する
   */
  public moveToArticleList() {
    this.router.navigate(['admin/articleList']);
  }

  /**
   * 記事詳細画面に遷移する
   * @param articleId
   */
  public moveToArticleDetail(articleId: number) {
    this.router.navigate(['detail'], {
      queryParams: { id: articleId.toString() },
    });
  }

  /**
   * 記事詳細画面に遷移する
   * @param articleId
   */
  public moveToAdminPortal() {
    this.router.navigate(['admin/portal'], {});
  }

  /**
   * 記事作成画面に遷移する
   */
  public moveToCreateArticle() {
    this.router.navigate(['admin/createArticle']);
  }

  /**
   * 記事編集画面に遷移する
   * @param articleId
   */
  public moveToEditArticle(articleId: number) {
    this.router.navigate(['admin/editArticle'], {
      queryParams: { id: articleId.toString() },
    });
  }

  /**
   * タグ管理画面に遷移する
   */
  public moveToTags() {
    this.router.navigate(['admin/tags']);
  }

  /**
   * 下書き管理画面に遷移する
   */
  public moveToDrafts() {
    this.router.navigate(['admin/drafts']);
  }

  /**
   * 設定画面に遷移する
   */
  public moveToSettings() {
    this.router.navigate(['admin/settings']);
  }

  /**
   * 分析画面に遷移する
   */
  public moveToAnalytics() {
    this.router.navigate(['admin/analytics']);
  }
}
