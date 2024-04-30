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
    // nProgress.configure({ showSpinner: false });
    // if (req.reportProgress) {
    //   nProgress.start();
    //   return next.handle(req).pipe(
    //     tap((event: HttpEvent<any>) => {
    //       // if (event.type == HttpEventType.Response) {}
    //     }),
    //     finalize(() => {
    //       nProgress.done();
    //     })
    //   );
    // } else {
    return next.handle(req);
    // }
  }
}
