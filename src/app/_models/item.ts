// Item class definition, derived from Mongo backend schema

export class Item {
  id: number;
  name: string;
  price: number;
  description: string;
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
  calories: number;
}