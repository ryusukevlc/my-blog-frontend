import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ArticleDetailComponent, HomeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class GeneralModule {}
