import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Menu } from '../../_models/menu';
import { Section } from '../../_models/section';
import { Item } from '../../_models/item';
import { MenuService } from '../../services/menu.service';
declare var jQuery: any;
declare var menuBuilderFunctionality: any;

@Component({
  selector: 'menu-builder',
  templateUrl: './app/components/menu-builder/menu-builder.component.html',
})

export class MenuBuilderComponent {
  title: string;
  domElement: any;
  editItemsDialog: any;
  addItemDialog: any;
  @ViewChild('grid') el: ElementRef;
  constructor(menu: Menu, elementRef: ElementRef, ) {
    this.domElement = elementRef;
  }

  //Initializing Menu-builder
  ngOnInit() {
      menuBuilderFunctionality.init();
  }

  ngAfterContentInit(): void {
    this.editItemsDialog = this.domElement.nativeElement.querySelector('#edit-items-dialog');
    this.addItemDialog = this.domElement.nativeElement.querySelector('#add-item-dialog');
  }

  addSection(){
      menuBuilderFunctionality.addSection();
  }

  addSpacer(){
    menuBuilderFunctionality.addSpacer();
  }
  saveMenu() {
    // TODO method stub
  }

  editItems() {
    this.editItemsDialog.showModal();
    menuBuilderFunctionality.editItems();
  }

  addItem() {
    this.addItemDialog.showModal();
  }

  // This saves the order of the items in a section, as dictated by sortable and the user
  saveItems() {
    // TODO
    this.editItemsDialog.close();
  }

  // This saves the info from the Add Item form
  saveItem() {
    // TODO
    this.addItemDialog.close();
  }

  // TODO implement drag-and-drop functionality
}
