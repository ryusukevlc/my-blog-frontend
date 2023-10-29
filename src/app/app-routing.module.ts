import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/shared-components/page-not-found/page-not-found.component';
import { ArticleResolverService } from './core/resolvers/article-resolver.service';
import { TagResolverService } from './core/resolvers/tag-resolver.service';
import { ArticleListComponent } from './components/admin/articles/article-list/article-list.component';
import { CreateArticleComponent } from './components/admin/articles/create-article/create-article.component';
import { EditArticleComponent } from './components/admin/articles/edit-article/edit-article.component';
import { DraftsComponent } from './components/admin/drafts/drafts.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PortalComponent } from './components/admin/portal/portal.component';
import { TagsComponent } from './components/admin/tags/tags.component';
import { ArticleDetailComponent } from './components/user/articles/article-detail/article-detail.component';
import { HomeComponent } from './components/user/home/home.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { AnalyticsComponent } from './components/admin/analytics/analytics.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
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
    component: ArticleListComponent,
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
  { path: 'admin/tags', component: TagsComponent, pathMatch: 'full' },
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
