import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [HomeComponent, ArticleDetailComponent],
  imports: [CommonModule],
})
export class PagesModule {}
