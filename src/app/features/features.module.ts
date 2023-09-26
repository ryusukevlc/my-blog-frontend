import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';
import { GeneralModule } from './general/general.module';

@NgModule({
  declarations: [],
  imports: [AdminModule, GeneralModule],
})
export class FeaturesModule {}
