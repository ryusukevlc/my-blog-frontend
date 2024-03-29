import { Article } from 'src/app/shared/interfaces/article.interface';
import { AdminTag } from '../admin-tags/admin-tag.model';

export class AdminArticle implements Article {
  public id: number;
  public title: string;
  public content: string;
  public createdAt: string;
  public updatedAt: string;
  public tagList: AdminTag[];
  public partOfContent: string;
  public allNumbers: number;

  constructor(
    id: number,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    tagList: AdminTag[],
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
