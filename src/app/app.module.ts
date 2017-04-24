import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MenuService } from './services/menu.service';
import { MDL } from './directives/MaterialDesignLiteUpgradeElement';
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
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-items', component: AddItemsComponent },
  { path: 'menu-builder', component: MenuBuilderComponent },
  { path: 'menu/:id', component: MenuComponent },
  { path: 'menu-builder/:name/:desc', component: MenuBuilderComponent }
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
      Section
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
