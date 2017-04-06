import { Injectable } from '@angular/core';
import { Menu } from '../menu';

@Injectable()
export class MenuService {
  menus: Array<Menu>;

  getMenus(): Menu[] {
    // TODO make db call using API endpoint to get menus associated with current user
    return this.menus;
  }
}
