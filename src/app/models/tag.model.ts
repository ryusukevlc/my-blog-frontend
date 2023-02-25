export class Tag {
  public id: number;
  public name: string;
  public created_at: Date;
  public updated_at: Date;
  public isSelected: boolean = false;

  constructor(id: number, name: string, created_at: Date, updated_at: Date) {
    this.id = id;
    this.name = name;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
