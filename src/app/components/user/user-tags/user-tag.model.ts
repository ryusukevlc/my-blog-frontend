import { Tag } from 'src/app/shared/interfaces/tag.interface';

export class UserTag implements Tag {
  public id: number;
  public name: string;
  public createdAt: Date;
  public updatedAt: Date;
  public isSelected: boolean = false;

  constructor(id: number, name: string, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
