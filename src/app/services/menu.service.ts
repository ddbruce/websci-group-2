import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Menu } from '../_models/menu';

// Statics
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {
  private baseUrl = '/api/';
  menus: Array<Menu>;

  constructor(private http: Http) {
    this.menus = [];
  }

  newMenu(menu:Menu){
    console.log(menu);
    this.menus.push(menu);
  }

  getUserMenus(): Promise<Menu[]> {
    let currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
    console.log('currentUserId:', currentUserId);

    return this.http.get(this.baseUrl + 'user/user-menus/' + currentUserId)
      .toPromise()
      .then(response => response.json() as Menu[]);
  }
}
