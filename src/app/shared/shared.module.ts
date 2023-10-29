import { NgModule } from '@angular/core';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, PageNotFoundComponent],
})
export class SharedModule {}
