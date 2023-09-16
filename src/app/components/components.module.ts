import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesModule, SharedModule],
  exports: [SharedModule],
})
export class ComponentsModule {}
