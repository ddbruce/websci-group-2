// Menu class definition, derived from Mongo backend schema
import { Section } from './section';
export class Menu {
  _id: string;
  name: string;
  description: string;
  css: string;
  sections: Array<Section>;
  isLive: boolean; // front-end only

  constructor(arg?:any){
    this.name = arg && arg.name;
    this.description = arg && arg.desc;
  }
}
