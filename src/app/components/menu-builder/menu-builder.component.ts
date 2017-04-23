import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Menu } from '../../_models/menu';
import { Section } from '../../_models/section';
import { Item } from '../../_models/item';
import { MenuService } from '../../services/menu.service';
declare var jQuery: any;

@Component({
  selector: 'menu-builder',
  templateUrl: './app/components/menu-builder/menu-builder.component.html',
})

export class MenuBuilderComponent {
  title: string;
  @ViewChild('grid') el: ElementRef;
  constructor(menu: Menu, elementRef: ElementRef) {
  }

  //Initializing Menu-builder
  ngOnInit() {
      var menuBuilder = jQuery(this.el.nativeElement).packery({
          // options
          itemSelector: '.grid-item',
          gutter: 10
      });

      var items = menuBuilder.find('.grid-item').draggable();
      menuBuilder.packery('bindUIDraggableEvents', items);
  }

  saveMenu() {
    // TODO method stub
  }

  // TODO implement drag-and-drop functionality
}
