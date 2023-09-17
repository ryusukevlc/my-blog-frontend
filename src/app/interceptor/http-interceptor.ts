import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as nProgress from 'nprogress';
import { finalize, Observable, of, tap } from 'rxjs';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === 'POST') {
      return this.postProcess(req);
    } else if (req.method === 'DELETE') {
      return this.deleteProcess();
    } else if (req.method === 'PATCH') {
      return this.patchProcess(req);
    } else {
      return this.getProcess(req, next);
    }
  }

  /**
   * POSTリクエスト
   *
   * @param req
   * @returns
   */
  private postProcess(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const data = this.http
      .get(req.url.replace('method', 'POST'))
      .subscribe((response) => {
        return response;
      });
    return of(new HttpResponse({ status: 200, body: data }));
  }

  /**
   * DELETEリクエスト
   *
   * @returns
   */
  private deleteProcess(): Observable<HttpEvent<any>> {
    console.log('success deleted. httpStatus: 204');
    return of(new HttpResponse({ status: 204 }));
  }

  /**
   * PATCHリクエスト
   *
   * @param req
   * @returns
   */
  private patchProcess(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const data = this.http
      .get(req.url.replace('method', 'POST'))
      .subscribe((response) => {
        return response;
      });
    return of(new HttpResponse({ status: 200, body: data }));
  }

  /**
   * GETリクエスト
   *
   * @param req
   * @param next
   * @returns
   */
  private getProcess(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneReq = this.createCloneReq(req);
    nProgress.configure({ showSpinner: false });
    if (req.reportProgress) {
      // プログレスバー開始
      nProgress.start();
      return next.handle(cloneReq).pipe(
        tap((event: HttpEvent<any>) => {
          // レスポンスに対する加工
          // if (event.type == HttpEventType.Response) {}
        }),
        finalize(() => {
          // プログレスバー完了
          nProgress.done();
        })
      );
    } else {
      return next.handle(cloneReq);
    }
  }

  /**
   * クローンリクエスト作成
   *
   * @param req
   * @returns
   */
  private createCloneReq(req: HttpRequest<any>): HttpRequest<any> {
    if (this.isMarkdownEnabled(req.urlWithParams)) {
      return req.clone({
        url:
          req.url
            .replace('method', 'GET')
            .replace('articles', 'articles/markdown') + '.json',
      });
    }
    return req.clone({
      url: req.url.replace('method', 'GET') + '.json',
    });
  }

  /**
   * クエリパラメータでmarkdownが指定されているかどうか判定
   *
   * @param urlWithParams
   * @returns
   */
  private isMarkdownEnabled(urlWithParams: string): boolean {
    if (urlWithParams.split('?').length !== 2) {
      return false;
    }
    const queryString = urlWithParams.split('?')[1];
    return queryString.includes('markdown=true');
  }
}
