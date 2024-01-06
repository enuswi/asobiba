import express from 'express';
import { calculateScore } from './usecases/calculateScore';
const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// health check用のエンドポイント / 200ステータスを返す
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(JSON.stringify({status: 'ok'}));
});

// 点数計算用のエンドポイント
app.post('/calculate-score', async (req: express.Request, res: express.Response) => {
  const body = req.body;
  // TODO validation check

  const score = await calculateScore.handle({
    prevalentWind: body.prevalentWind,
    seatWind: body.seatWind,
    dora: body.dora.map(item => item.value),
    uradora: body.uradora.map(item => item.value),
    hand: body.hand,
    reach: body.reach,
    ronpai: body.ronpai,
  });
  res.send(JSON.stringify(score));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Start on port 3000.');
});
