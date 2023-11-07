import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from '../shared/shared-components/footer/footer.component';
import { HeaderComponent } from '../shared/shared-components/header/header.component';
import { PageNotFoundComponent } from '../shared/shared-components/page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule],
})
export class CoreModule {}
