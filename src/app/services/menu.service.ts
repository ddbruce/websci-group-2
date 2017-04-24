import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Menu } from '../_models/menu';
import { Section } from '../_models/section';
import { Item } from '../_models/item';

// Statics
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {
  private baseUrl = '/api/';

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

  getMenuById(menuId: string): Promise<Menu> {
    // TODO handle case of nonexistent menu
    return this.getUserMenus()
      .then(data => {
        return data.find(menu => { return menu._id == menuId });
      });
  }

  getMenuSections(menuId: string): Promise<Section[]> {
    return this.http.get(this.baseUrl + 'menu/menu-sections/' + menuId)
      .toPromise()
      .then(response => response.json() as Section[]);
  }

  getItemsById(itemIds: Array<string>): Promise<Item[]> {
    return Promise.all(itemIds.map(itemId => {
      return this.http.get(this.baseUrl + 'item/' + itemId)
        .toPromise()
        .then(response => response.json() as Item);
    }));
  }
}
