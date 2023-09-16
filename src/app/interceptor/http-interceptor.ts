import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as nProgress from 'nprogress';
import { finalize, Observable, tap } from 'rxjs';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // req.urlはreadonlyのためそのまま上書きすることができない。
    // そのため、reqをクローンしてurlを上書きするようにした。
    const cloneReq = req.clone({ url: req.url + '.json' });

    nProgress.configure({ showSpinner: false });

    if (req.reportProgress) {
      // プログレスバー開始
      nProgress.start();

      return next.handle(cloneReq).pipe(
        tap((event: HttpEvent<any>) => {}),
        finalize(() => {
          // プログレスバー完了
          nProgress.done();
        })
      );
    } else {
      return next.handle(cloneReq);
    }
  }
}
