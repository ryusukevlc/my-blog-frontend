import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, ArticleDetailComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent],
})
export class PagesModule {}
