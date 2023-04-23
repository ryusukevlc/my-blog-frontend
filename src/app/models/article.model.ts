import { Tag } from './tag.model';

export class Article {
  public id: number;
  public title: string;
  public content: string;
  public createdAt: string;
  public updatedAt: string;
  public tagList: Tag[];
  public partOfContent: string;
  public allNumbers: number;

  constructor(
    id: number,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    tagList: Tag[],
    partofContent: string,
    allNumbers: number
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.tagList = tagList;
    this.partOfContent = partofContent;
    this.allNumbers = allNumbers;
  }
}
