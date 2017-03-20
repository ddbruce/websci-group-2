// Section class definition, derived from Mongo backend schema

import { Item } from './item';

export class Section {
  name: string;
  items: Array<Item>;
}
