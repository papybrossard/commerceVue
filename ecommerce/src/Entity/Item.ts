export default class Item {
  id: number;
  price: number;
  title: string;
  category: string;
  image: string;
  quantity: number;

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
    this.quantity = 1;
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

  getQuantity(): number {
    return this.quantity;
  }
}
