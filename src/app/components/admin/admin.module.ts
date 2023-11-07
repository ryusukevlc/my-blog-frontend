import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminArticleListComponent } from './admin-articles/admin-article-list/admin-article-list.component';
import { CreateArticleComponent } from './admin-articles/create-article/create-article.component';
import { EditArticleComponent } from './admin-articles/edit-article/edit-article.component';
import { DraftsComponent } from './drafts/drafts.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { AdminTagsComponent } from './admin-tags/admin-tags.component';
import { SettingsComponent } from './settings/settings.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    AdminArticleListComponent,
    CreateArticleComponent,
    EditArticleComponent,
    DraftsComponent,
    LoginComponent,
    PortalComponent,
    AdminTagsComponent,
    SettingsComponent,
    AnalyticsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
