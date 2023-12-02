import express from 'express'
const app: express.Express = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log('start on port 3000')
})

app.get('/', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify('test'))
})