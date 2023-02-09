export default class Category {
  id: number;
  category: string;

  constructor(id: number, category: string) {
    this.id = id;
    this.category = category;
  }

  public getId(): number {
    return this.id;
  }

  public getCategory(): string {
    return this.category;
  }
}
