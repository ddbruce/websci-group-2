import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
})

export class AppComponent  {
  name = 'Menuoso';

  constructor(private menuService: MenuService) { }
}
