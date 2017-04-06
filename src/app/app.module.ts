import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MenuService } from './services/menu.service';
import { HeaderComponent } from './header/header.component';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent
  ],
  providers: [ MenuService ],
  bootstrap:    [ HeaderComponent, AppComponent ]
})
export class AppModule { }
