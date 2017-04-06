import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MenuService } from './services/menu.service';
import { HeaderComponent } from './header/header.component';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuBuilderComponent } from './menu-builder/menu-builder.component';
import { MDL } from './directives/MaterialDesignLiteUpgradeElement';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MenuBuilderComponent,
    MDL
  ],
  providers: [ MenuService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
