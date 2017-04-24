import { Component, Input, OnInit, ElementRef, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../_models/menu';
import { Section } from '../../_models/section';
import { Item } from '../../_models/item';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'item-editor',
  templateUrl: './app/components/item-editor/item-editor.component.html'
})

export class ItemEditorComponent implements OnInit {
  @Input() item: Item;
  model: any = {};
  domElement: any;
  inputs: any;

  constructor(private route: ActivatedRoute, private menuService: MenuService, element: ElementRef) {
    this.domElement = element;
  }

  ngOnInit() {
    this.model.name = this.item.name;
    this.model.price = this.item.price;
  }

  ngAfterContentInit(): void {
    this.inputs = this.domElement.nativeElement.querySelectorAll('.mdl-textfield');

    // Make labels float
    this.inputs.forEach((someInput: any) => {
      someInput.classList.add('is-dirty');
    });
  }

  saveItem(itemId: string, formValues: any) {
    this.menuService.saveItem(itemId, formValues)
      .then(data => {
        this.item = data;
      });
  }
}
