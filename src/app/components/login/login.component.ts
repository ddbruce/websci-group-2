import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app/components/login/login.component.html',
})

export class LoginComponent {
  isRegistering: boolean;

  constructor() {
    this.isRegistering = false;
  }

  showRegisterForm() {
    this.isRegistering = true;
  }

  showLoginForm() {
    this.isRegistering = false;
  }

  login() {
    console.log('TODO login');
  }

  register() {
    console.log('TODO register');
  }
}
