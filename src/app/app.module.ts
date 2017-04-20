import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MenuService } from './services/menu.service';
import { MDL } from './directives/MaterialDesignLiteUpgradeElement';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuBuilderComponent } from './components/menu-builder/menu-builder.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service'
import { AuthenticationService } from './services/authenticate.service';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { Menu } from './_models/menu';
import { Section } from './_models/section';
import { Item } from './_models/item';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-items', component: AddItemsComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    MDL,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    MenuBuilderComponent,
    AddItemsComponent
  ],
  providers: [
      MenuService,
      UserService,
      AuthenticationService,
      Menu,
      Section,
      Item
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
