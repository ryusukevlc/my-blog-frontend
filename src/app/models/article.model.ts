import { Tag } from './tag.model';

export class Article {
  public id: number;
  public title: string;
  public content: string;
  public created_at: string;
  public updated_at: string;
  public thumbnail: string;
  public tagList: Tag[];
  public partOfContent: string;
  public allNumbers: number;

  constructor(
    id: number,
    title: string,
    content: string,
    created_at: string,
    updated_at: string,
    thumbnail: string,
    tagList: Tag[],
    partofContent: string,
    allNumbers: number
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.thumbnail = thumbnail;
    this.tagList = tagList;
    this.partOfContent = partofContent;
    this.allNumbers = allNumbers;
  }
}
