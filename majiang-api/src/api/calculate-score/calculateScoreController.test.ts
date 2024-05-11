import {CalculateScoreController} from './calculateScoreController';

describe(`点数計算 - 正常系`, () => {
  test(`親満 - ツモ`, async () => {
    // Arrange
    // Action
    const request = {
      prevalentWind: 0,
      seatWind: 0,
      dora: ['m7'],
      uradora: ['m8'],
      hand: 'm789p111789s13z55s2*',
      reach: false,
      ronpai: '',
    };

    const result = await CalculateScoreController.handle(request);

    // Assert
    expect(result).not.toBeUndefined();
    expect(result.fu).toBe(40);
    expect(result.fanshu).toBe(5);
    expect(result.fenpei).toStrictEqual([12000, -4000, -4000, -4000]);
    expect(result?.defen).toBe(12000);
  });
});
