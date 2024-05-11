export class Wind {
  private static TON = 0;
  private static NAN = 1;
  private static SHA = 2;
  private static PEI = 3;
  
  private constructor(value: number) {
    if (value < 0 || value > 3) {
      throw new Error('Invalid value');
    }
    this.value = value;
  }
  public static createTon = (): Wind => new Wind(Wind.TON);
  public static createNan = (): Wind => new Wind(Wind.NAN);
  public static createSha = (): Wind => new Wind(Wind.SHA);
  public static createPei = (): Wind => new Wind(Wind.PEI);
  public static fromNumber = (value: number): Wind => new Wind(value);

  public readonly value: number;
}
