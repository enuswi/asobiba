import express from 'express';
const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// health check用のエンドポイント / 200ステータスを返す
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(JSON.stringify({status: 'ok'}));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Start on port 3000.');
});
