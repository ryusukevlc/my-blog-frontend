import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/shared-components/page-not-found/page-not-found.component';
import { ArticleResolverService } from './core/resolvers/article-resolver.service';
import { TagResolverService } from './core/resolvers/tag-resolver.service';
import { AdminArticleListComponent } from './components/admin/admin-articles/admin-article-list/admin-article-list.component';
import { CreateArticleComponent } from './components/admin/admin-articles/create-article/create-article.component';
import { EditArticleComponent } from './components/admin/admin-articles/edit-article/edit-article.component';
import { DraftsComponent } from './components/admin/drafts/drafts.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PortalComponent } from './components/admin/portal/portal.component';
import { AdminTagsComponent } from './components/admin/admin-tags/admin-tags.component';
import { ArticleDetailComponent } from './components/user/user-articles/article-detail/article-detail.component';
import { UserArticleListComponent } from './components/user/user-articles/user-article-list/user-article-list.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { AnalyticsComponent } from './components/admin/analytics/analytics.component';

const routes: Routes = [
  { path: '', component: UserArticleListComponent, pathMatch: 'full' },
  {
    path: 'detail',
    component: ArticleDetailComponent,
    pathMatch: 'full',
    resolve: {
      article: ArticleResolverService,
    },
  },
  { path: 'admin/login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'admin/portal',
    component: PortalComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin/articleList',
    component: AdminArticleListComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin/createArticle',
    component: CreateArticleComponent,
    pathMatch: 'full',
    resolve: {
      tags: TagResolverService,
    },
  },
  {
    path: 'admin/editArticle',
    component: EditArticleComponent,
    pathMatch: 'full',
    resolve: {
      tags: TagResolverService,
      article: ArticleResolverService,
    },
  },
  { path: 'admin/tags', component: AdminTagsComponent, pathMatch: 'full' },
  { path: 'admin/drafts', component: DraftsComponent, pathMatch: 'full' },
  {
    path: 'admin/settings',
    component: SettingsComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin/analytics',
    component: AnalyticsComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
