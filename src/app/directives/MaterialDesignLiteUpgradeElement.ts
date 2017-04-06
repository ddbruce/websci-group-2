import { Directive, AfterViewInit } from '@angular/core';

declare var componentHandler: any;

@Directive({
  selector: '[mdl]'
})

// http://stackoverflow.com/questions/34421919/integrating-material-design-lite-with-angular2/35451821#35451821
export class MDL implements AfterViewInit {
  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }
}
