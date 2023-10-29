import { Injectable } from '@angular/core';
import { MENU_ITEMS } from 'src/app/features/admin/portal/porta.data';

@Injectable({
  providedIn: 'root',
})
export class PortalService {
  constructor() {}

  public getMenuItems() {
    return MENU_ITEMS;
  }
}
