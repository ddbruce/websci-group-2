import { Component } from '@angular/core';

import { MenuService } from './services/menu.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  name = 'Menuoso';

  constructor(private menuService: MenuService) { }
}
