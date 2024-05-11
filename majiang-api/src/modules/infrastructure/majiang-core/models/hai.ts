export class Hai {
  public readonly value: string;

  private constructor(value: string) {
    if (!value.match(/^(?:[mps]\d|z[1-7])$/)) {
      throw new Error('Invalid value');
    }
    this.value = value;
  }

  public static create = (value: string): Hai => new Hai(value);
}
