export class Article {
  public title: string;
  public content: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(title: string, content: string, createdAt: Date, updateAt: Date) {
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updateAt;
  }
}
