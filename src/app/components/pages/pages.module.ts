import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticleListComponent } from './admin/articles/article-list/article-list.component';
import { CreateArticleComponent } from './admin/articles/create-article/create-article.component';
import { EditArticleComponent } from './admin/articles/edit-article/edit-article.component';
import { DraftsComponent } from './admin/drafts/drafts.component';
import { LoginComponent } from './admin/login/login.component';
import { PortalComponent } from './admin/portal/portal.component';
import { TagsComponent } from './admin/tags/tags.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ArticleDetailComponent,
    PortalComponent,
    LoginComponent,
    EditArticleComponent,
    CreateArticleComponent,
    ArticleListComponent,
    TagsComponent,
    DraftsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class PagesModule {}
