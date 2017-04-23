import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authenticate.service';
import { UserService } from '../../services/user.service'
import { User } from '../../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './app/components/login/login.component.html',
})

export class LoginComponent {
    isRegistering: boolean;
    model: any = {};

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router) {
    this.isRegistering = false;
  }

  showRegisterForm() {
    this.isRegistering = true;
  }

  showLoginForm() {
    this.isRegistering = false;
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
        data => {
            console.log("Success");
            this.router.navigate(['/home'], { skipLocationChange: true });
        },
        error => {
            console.log("ERROR:", error);
        });
  }

  register() {
    let user:User = new User(this.model.username,this.model.password);
    this.userService.create(user)
        .subscribe(
        data => {
            console.log(data);
        },
        error => {
            console.log("Error");
        });
  }
}
