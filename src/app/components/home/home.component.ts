import { Component, ElementRef, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../_models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'menuoso-home',
  templateUrl: './app/components/home/home.component.html',
})

export class HomeComponent {
  title: string;
  menus: Array<Menu>;
  newMenuDialog: any;
  domElement: any;
  menuService: any;

  constructor(private _menuService: MenuService, element: ElementRef, private router: Router) {
    this.title = 'Your Menus';
    this.menus = [];
    this.domElement = element;
    this.menuService = _menuService;
  }

  ngAfterContentInit(): void {
    this.newMenuDialog = this.domElement.nativeElement.querySelector('#new-menu-dialog');
  }

  createNewMenu() {
    // menuService.newMenu()
    console.log('TODO grab form info');
    this.newMenuDialog.close();
    this.router.navigateByUrl('/add-items');
  }
}
