import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { UserArticleListComponent } from './articles/user-article-list/user-article-list.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [
    ArticleDetailComponent,
    UserArticleListComponent,
    TagsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
