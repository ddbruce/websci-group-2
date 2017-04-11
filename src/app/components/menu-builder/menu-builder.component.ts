import { Component } from '@angular/core';
import { Menu } from '../../_models/menu';
import { Section } from '../../_models/section';
import { Item } from '../../_models/item';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'menu-builder',
  templateUrl: './app/components/menu-builder/menu-builder.component.html',
})

export class MenuBuilderComponent {
  title: string;

  constructor(menu: Menu) {
    this.title = 'Menu Builder';
  }

  saveMenu() {
    // TODO method stub
  }

  // TODO implement drag-and-drop functionality
}
