import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Insert {{name}} here</h1>`,
})
export class AppComponent  { name = 'Menuoso'; }
