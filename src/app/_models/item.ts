// Item class definition, derived from Mongo backend schema

export class Item {
  _id: string;
  name: string;
  price: number;
  description: string;
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
  calories: number;
}