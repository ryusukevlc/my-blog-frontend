import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { PortalComponent } from './admin/portal/portal.component';
import { LoginComponent } from './admin/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditArticleComponent } from './admin/articles/edit-article/edit-article.component';
import { CreateArticleComponent } from './admin/articles/create-article/create-article.component';
import { ArticleListComponent } from './admin/articles/article-list/article-list.component';
import { TagsComponent } from './admin/tags/tags.component';
import { DraftsComponent } from './admin/drafts/drafts.component';

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
