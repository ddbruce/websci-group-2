import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';
import { AuthenticationService } from './services/authenticate.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
})

export class AppComponent  {
  name = 'Menuoso';

  constructor(private menuService: MenuService, private authenticationService: AuthenticationService) { }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }
}
