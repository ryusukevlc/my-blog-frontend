import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './components/pages/admin/articles/article-list/article-list.component';
import { CreateArticleComponent } from './components/pages/admin/articles/create-article/create-article.component';
import { EditArticleComponent } from './components/pages/admin/articles/edit-article/edit-article.component';
import { DraftsComponent } from './components/pages/admin/drafts/drafts.component';
import { LoginComponent } from './components/pages/admin/login/login.component';
import { PortalComponent } from './components/pages/admin/portal/portal.component';
import { TagsComponent } from './components/pages/admin/tags/tags.component';
import { ArticleDetailComponent } from './components/pages/article-detail/article-detail.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ArticleResolverService } from './core/resolvers/article-resolver.service';
import { TagResolverService } from './core/resolvers/tag-resolver.service';

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
