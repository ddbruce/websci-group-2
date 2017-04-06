// Menu class definition, derived from Mongo backend schema

import { Section } from './section';

export class Menu {
  id: number;
  name: string;
  sections: Array<Section>;
}
