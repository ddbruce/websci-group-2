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

  constructor(private menuService: MenuService, element: ElementRef, private router: Router) {
    this.title = 'Your Menus';
    this.menus = [];
    this.domElement = element;

    this.menuService.getUserMenus().then(data => {
      this.menus = data;
      console.log('this.menus:', this.menus);
    });
  }

  ngAfterContentInit(): void {
    this.newMenuDialog = this.domElement.nativeElement.querySelector('#new-menu-dialog');
  }

  createNewMenu() {
    console.log('TODO grab form info');
    // menuService.newMenu()
    this.newMenuDialog.close();
    this.router.navigateByUrl('/menu-builder');
    this.menuService.getUserMenus();
  }
}
