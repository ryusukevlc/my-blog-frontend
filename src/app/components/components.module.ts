import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [AdminModule, UserModule],
})
export class ComponentsModule {}
