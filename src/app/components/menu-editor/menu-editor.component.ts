import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../_models/menu';
import { Section } from '../../_models/section';
import { Item } from '../../_models/item';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'menu-editor',
  templateUrl: './app/components/menu-editor/menu-editor.component.html'
})

export class MenuEditorComponent implements OnInit, OnDestroy {
  menu: Menu;
  private sub: any;

  constructor(private route: ActivatedRoute, private menuService: MenuService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let menuId = params['id'];
      this.menuService.getMenuById(menuId)
        .then(data => {
          this.menu = data;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
