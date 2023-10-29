import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { httpInterceptor } from './core/interceptors/http-interceptor';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MarkdownModule,
    SharedModule,
  ],
  exports: [MarkdownModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
