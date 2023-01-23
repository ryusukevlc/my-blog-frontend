import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { PortalComponent } from './admin/portal/portal.component';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [HomeComponent, ArticleDetailComponent, PortalComponent, LoginComponent],
  imports: [CommonModule],
})
export class PagesModule {}
