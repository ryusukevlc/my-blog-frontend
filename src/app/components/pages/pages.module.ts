import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { PortalComponent } from './admin/portal/portal.component';
import { LoginComponent } from './admin/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ArticleDetailComponent,
    PortalComponent,
    LoginComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class PagesModule {}
