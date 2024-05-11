import {MajiangCoreApi} from '../infrastructure/majiang-core/api';
import {Hai} from '../infrastructure/majiang-core/models/hai';
import {Wind} from '../infrastructure/majiang-core/models/wind';

export class CalculateScoreUsecase {
  public static handle = async (param: {
    prevalentWind: number; // 場風 0: 東
    seatWind: number; // 自風 0: 東
    dora: string[]; // ex. ['z5'],
    uradora: string[]; // ex. ['m8'],
    hand: string; // ex. m789p111789s13z55s2*
    reach: boolean; // 立直 ダブルリーチは一旦無視
    ronpai?: string; // ex. 's2+'
  }) => {
    const {prevalentWind, seatWind, dora, uradora, hand, reach, ronpai} = param;

    const coreLib = await MajiangCoreApi.create();
    const shoupai = coreLib.shoupaiFromString(hand);
    return coreLib.hule({
      shoupai,
      ronpai,
      prevalentWind: Wind.fromNumber(prevalentWind),
      seatWind: Wind.fromNumber(seatWind),
      isReach: reach,
      dora: dora.map(Hai.create),
      uradora: uradora.map(Hai.create),
    });
  };
}
