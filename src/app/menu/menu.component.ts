import { Component } from '@angular/core';
import { Menu } from '../menu';
import { Section } from '../section';
import { Item } from '../item';

@Component({
  selector: 'menu',
  templateUrl: './../views/menu.component.html',
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
