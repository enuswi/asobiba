import {calculateScore} from '../../usecases/calculateScore';

export class CalculateScoreController {
  static async handle(req: Request): Promise<Response> {
    const {prevalentWind, seatWind, dora, uradora, hand, reach, ronpai} = req;
    // TODO validation check

    const score = await calculateScore.handle({
      prevalentWind: prevalentWind,
      seatWind: seatWind,
      dora: dora.map(item => item),
      uradora: uradora.map(item => item),
      hand: hand,
      reach: reach,
      ronpai: ronpai,
    });

    console.log(score);
    return JSON.stringify(score);
  }
}

type Request = {
  prevalentWind: number; // 場風 0: 東
  seatWind: number; // 自風 0: 東
  dora: string[]; // ex. ['z5'],
  uradora: string[]; // ex. ['m8'],
  hand: string; // ex. m789p111789s13z55s2*
  reach: boolean; // 立直 ダブルリーチは一旦無視
  ronpai?: string; // ex. 's2+'
};

type Response = {
  //
};