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
  constructor(arg?: any) {
      this.name = arg && arg.name;
      this.price = arg && arg.name;
      this.description = arg && arg.desc;
      this.isVegetarian = arg && arg.name;
      this.isVegan = arg && arg.name;
      this.isGlutenFree = arg && arg.name;
      this.calories = arg && arg.name;
  }
}