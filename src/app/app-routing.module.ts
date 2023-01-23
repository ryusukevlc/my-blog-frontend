import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/admin/login/login.component';
import { PortalComponent } from './components/pages/admin/portal/portal.component';
import { ArticleDetailComponent } from './components/pages/article-detail/article-detail.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'detail', component: ArticleDetailComponent, pathMatch: 'full' },
  { path: 'admin/login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'admin/portal',
    component: PortalComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
