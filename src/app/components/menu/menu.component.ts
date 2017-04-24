import { Component } from '@angular/core';
import { Menu } from '../../_models/menu';
import { Section } from '../../_models/section';
import { Item } from '../../_models/item';

@Component({
  selector: 'menu',
  templateUrl: './app/components/menu/menu.component.html'
})

export class MenuComponent {
  name: string;
  sections: Array<Section>;
  stylesheetUrl: string; // TODO

  constructor(menu: Menu) {
    this.name = menu.name;
    this.sections = menu.sections;
  }
}
