import { UserTag } from '../user-tags/user-tag.model';

export class UserArticle {
  public id: number;
  public title: string;
  public content: string;
  public createdAt: string;
  public updatedAt: string;
  public tagList: UserTag[];
  public partOfContent: string;
  public allNumbers: number;

  constructor(
    id: number,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    tagList: UserTag[],
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
