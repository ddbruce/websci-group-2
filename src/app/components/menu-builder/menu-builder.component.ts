import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Menu } from '../../_models/menu';
import { Section } from '../../_models/section';
import { Item } from '../../_models/item';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import * as io from "socket.io-client";
declare var jQuery: any;
declare var menuBuilderFunctionality: any;

@Component({
  selector: 'menu-builder',
  templateUrl: './app/components/menu-builder/menu-builder.component.html'
})

export class MenuBuilderComponent {
  title: string;
  domElement: any;
  editItemsDialog: any;
  addItemDialog: any;
  @ViewChild('grid') el: ElementRef;
  name: string;
  desc: string;
  private sub: any;
  socket = io('http://localhost:3000');
  constructor(elementRef: ElementRef,private route: ActivatedRoute ) {
    this.domElement = elementRef;
  }

  //Initializing Menu-builder
  ngOnInit() {
      menuBuilderFunctionality.init();
       this.sub = this.route.params.subscribe(params => {
       this.name = params['name'];
       this.desc = params['desc'];

        // In a real app: dispatch action to load the details here.
      });
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
    this.socket.emit('create-css', this.name);
    console.log("Sent "+this.name+this.desc);
  }

  editItems() {
    this.editItemsDialog.showModal();
    menuBuilderFunctionality.editItems();
  }

  addItem() {
    this.addItemDialog.showModal();
  }

  hideMenu() {
      menuBuilderFunctionality.hideMenu();
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
