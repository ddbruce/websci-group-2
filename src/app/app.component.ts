import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './services/menu.service';
import { AuthenticationService } from './services/authenticate.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
})

export class AppComponent  {
  name = 'Menuoso';
  domElement: any;

  constructor(private menuService: MenuService,
    private authenticationService: AuthenticationService,
    private router: Router,
    element: ElementRef) {
    this.domElement = element;
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  logout() {
    this.authenticationService.logout()
    this.router.navigateByUrl(''); // Login

    // Handle logging out from navigation drawer
    this.hideElementByClassName('.mdl-layout__obfuscator');
    this.hideElementByClassName('.mdl-layout__drawer');
  }

  hideElementByClassName(className: string) {
    let classElement = this.domElement.nativeElement.querySelector(className);
    if (classElement.classList.contains('is-visible')) {
      classElement.classList.remove('is-visible');
    }
  }
}
