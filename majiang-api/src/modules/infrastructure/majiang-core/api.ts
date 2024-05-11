import {Hai} from './models/hai';
import {Wind} from './models/wind';

export class MajiangCoreApi {
  private coreLib: any;

  private constructor(coreLib: any) {
    this.coreLib = coreLib;
  }

  public static create = async (): Promise<MajiangCoreApi> => {
    const coreLib = await import('@kobalab/majiang-core');

    coreLib.rule({
      順位点: ['30.0', '10.0', '-10.0', '-30.0'],
      流し満貫あり: false,
      最大同時和了数: 1,
      トビ終了あり: false,
      オーラス止めあり: false,
    });

    return new MajiangCoreApi(coreLib);
  };

  public shoupaiFromString = (hand: string) => {
    return this.coreLib.Shoupai.fromString(hand);
  };

  public hule = (arg: {
    shoupai: any;
    ronpai: string;
    prevalentWind: Wind;
    seatWind: Wind;
    isReach: boolean;
    dora: Hai[];
    uradora: Hai[];
  }): HuleResult => {
    const {shoupai, ronpai, prevalentWind, seatWind, isReach, dora, uradora} = arg;
    return this.coreLib.Util.hule(shoupai, ronpai, {
      rule: this.coreLib.rule,
      zhuangfeng: prevalentWind.value,
      menfeng: seatWind.value,
      hupai: {
        lizhi: isReach ? 1 : 0, // 立直
        yifa: false, // 一発
        qianggang: false, // 槍槓（他家が加槓した牌でロン）
        lingshang: false, // 嶺上開花
        haidi: 0, // ハイテイ
        tianhu: 0, // 天和 - 地和
      },
      baopai: dora.map(hai => hai.value),
      fubaopai: uradora.map(hai => hai.value),
      jicun: {
        // 供託は今のところ無視でいい
        changbang: 0,
        lizhibang: 0,
      },
    });
  };
}

export type HuleResult = {
  hupai: {name: string; fanshu: number}[];
  fu: number;
  fanshu: number;
  defen: number;
  fenpei: number[];
};
