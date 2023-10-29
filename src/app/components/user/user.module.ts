import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticleDetailComponent } from './user-articles/article-detail/article-detail.component';
import { UserArticleListComponent } from './user-articles/user-article-list/user-article-list.component';
import { UserTagsComponent } from './user-tags/user-tags.component';

@NgModule({
  declarations: [
    ArticleDetailComponent,
    UserArticleListComponent,
    UserTagsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
