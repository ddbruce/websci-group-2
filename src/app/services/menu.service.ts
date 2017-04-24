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
    menus: Array<Menu>;
    items: Array<Item>;
    sections: Array<Section>;

  constructor(private http: Http) {
    this.menus = [];
    this.items = [];
    this.sections = [];
  }

  //Menu service handlers for menu-builder component
  newMenu(menu:Menu){
    console.log(menu);
    this.menus.push(menu);
  }
  newSection(section:Section){
    this.sections.push(section);
  }
  newItem(item:Item){
    this.items.push(item);
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

  getItemById(itemId: string): Promise<Item> {
    console.log('\tgetItemById id:', itemId);
    return this.http.get(this.baseUrl + 'item/' + itemId)
      .toPromise()
      .then(response => response.json() as Item);
  }

  saveItem(itemId: string, formValues: any): Promise<Item> {
    console.log('menuService.saveItem(', itemId, ',', formValues, ')');
    return this.http.put(this.baseUrl + 'item/' + itemId, formValues)
      .toPromise()
      .then(response => response.json() as Item);
  }
}
