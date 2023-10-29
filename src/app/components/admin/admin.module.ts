import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticleListComponent } from './articles/article-list/article-list.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { DraftsComponent } from './drafts/drafts.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { TagsComponent } from './tags/tags.component';
import { SettingsComponent } from './settings/settings.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    ArticleListComponent,
    CreateArticleComponent,
    EditArticleComponent,
    DraftsComponent,
    LoginComponent,
    PortalComponent,
    TagsComponent,
    SettingsComponent,
    AnalyticsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
