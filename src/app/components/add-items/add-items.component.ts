import { Component } from '@angular/core';
import { Menu } from '../../_models/menu';
import { Section } from '../../_models/section';
import { Item } from '../../_models/item';

@Component({
  selector: 'add-items',
  templateUrl: './app/components/add-items/add-items.component.html',
})

export class AddItemsComponent {
  menu: Menu;

  constructor(_menu: Menu) {
    this.menu = _menu;
  }
}
