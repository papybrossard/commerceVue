export default class Item {
  id: number;
  price: number;
  title: string;
  category: string;
  image: string;

  constructor(
    id: number,
    price: number,
    title: string,
    category: string,
    image: string
  ) {
    this.id = id;
    this.price = price;
    this.title = title;
    this.image = image;
    this.category = category;
  }

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.title;
  }

  getImage(): string {
    return this.image;
  }

  getCategory(): string {
    return this.category;
  }
}
