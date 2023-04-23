export class Datetime {
  public convertJacksonTime(array: string[]): string {
    return (
      array[0] +
      '-' +
      ('0' + array[1]).slice(-2) +
      '-' +
      ('0' + array[2]).slice(-2)
    );
  }
}
