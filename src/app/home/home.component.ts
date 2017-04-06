import { Component } from '@angular/core';
import { Menu } from '../_models/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'menuoso-home',
  templateUrl: './../views/home.component.html',
})

export class HomeComponent {
  title: string;
  menus: Array<Menu>;

  constructor(private menuService: MenuService) {
    this.title = 'Your Menus';
    this.menus = [];
    // this.menus = this.menuService.getMenus();
  }
}
