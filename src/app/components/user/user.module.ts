import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [ArticleDetailComponent, HomeComponent, TagsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
