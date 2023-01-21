import { Tag } from './tag.model';

export class Article {
  public id: number;
  public title: string;
  public content: string;
  public created_at: Date;
  public updated_at: Date;
  public thumbnail: string;
  public tagList: Tag[];

  constructor(
    id: number,
    title: string,
    content: string,
    created_at: Date,
    updated_at: Date,
    thumbnail: string,
    tagList: Tag[]
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.thumbnail = thumbnail;
    this.tagList = tagList;
  }
}
