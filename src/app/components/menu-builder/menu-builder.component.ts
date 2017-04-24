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
  name: string;
  desc: string;
  private sub: any;
  socket = io('http://localhost:3000');
  constructor(elementRef: ElementRef,private route: ActivatedRoute ) {
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
  // TODO implement drag-and-drop functionality
}
