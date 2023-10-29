import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';

@NgModule({
  declarations: [ArticleDetailComponent, HomeComponent, TagsComponent, ArticleListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
