// Menu class definition, derived from Mongo backend schema

import { Section } from './section';

export class Menu {
  _id: string;
  name: string;
  sections: Array<Section>;
  isLive: boolean; // front-end only
}
