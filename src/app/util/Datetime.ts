export class Datetime {
  public convertJacksonTime(array: string[]): string {
    return array[0] + '-' + array[1] + '-' + array[2];
  }
}
