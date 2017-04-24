"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
// Statics
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this.baseUrl = '/api/';
        this.menus = [];
        this.items = [];
        this.sections = [];
    }
    //Menu service handlers for menu-builder component
    MenuService.prototype.newMenu = function (menu) {
        console.log(menu);
        this.menus.push(menu);
    };
    MenuService.prototype.newSection = function (section) {
        this.sections.push(section);
    };
    MenuService.prototype.newItem = function (item) {
        this.items.push(item);
    };
    MenuService.prototype.getUserMenus = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
        console.log('currentUserId:', currentUserId);
        return this.http.get(this.baseUrl + 'user/user-menus/' + currentUserId)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    MenuService.prototype.getMenuById = function (menuId) {
        // TODO handle case of nonexistent menu
        return this.getUserMenus()
            .then(function (data) {
            return data.find(function (menu) { return menu._id == menuId; });
        });
    };
    MenuService.prototype.getMenuSections = function (menuId) {
        return this.http.get(this.baseUrl + 'menu/menu-sections/' + menuId)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    MenuService.prototype.getItemsById = function (itemIds) {
        var _this = this;
        return Promise.all(itemIds.map(function (itemId) {
            return _this.http.get(_this.baseUrl + 'item/' + itemId)
                .toPromise()
                .then(function (response) { return response.json(); });
        }));
    };
    MenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map