import { Tag } from './tag.interface';

export interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tagList: Tag[];
  partOfContent: string;
  allNumbers: number;
}
