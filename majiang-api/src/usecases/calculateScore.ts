export class calculateScore {
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

    // TODO: このimportはどこかにまとめたい
    const coreLib = await import('@kobalab/majiang-core');

    // ルール（Mリーグルール模倣）
    // TODO: このルールはどこかにまとめたい
    const rule = coreLib.rule({
      順位点: ['30.0', '10.0', '-10.0', '-30.0'],
      流し満貫あり: false,
      最大同時和了数: 1,
      トビ終了あり: false,
      オーラス止めあり: false,
    });

    const shoupai = coreLib.Shoupai.fromString(hand);

    const result = coreLib.Util.hule(shoupai, ronpai, {
      rule,
      zhuangfeng: prevalentWind,
      menfeng: seatWind,
      hupai: {
        lizhi: reach ? 1 : 0, // 立直
        yifa: false, // 一発
        qianggang: false,
        lingshang: false, // 嶺上開花
        haidi: 0, // ハイテイ
        tianhu: 0, // 天和 - 地和
      },
      baopai: dora,
      fubaopai: uradora,
      jicun: {
        // 供託は今のところ無視でいい
        changbang: 0,
        lizhibang: 0,
      },
    });

    // TODO: レスポンスは型定義したい
    return result;
  };
}
