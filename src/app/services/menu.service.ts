import { Injectable } from '@angular/core';

import { Menu } from '../menu';

@Injectable()
export class MenuService {
  menus: Menu[];

  getMenus(): Menu[] {
    // TODO make db call to get menus associated with current user
    return this.menus;
  }
}
