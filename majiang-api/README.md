## 起動まで

```
$ npm run build

$ docker build ./ --tag majang-api:v1.0.0

$ docker run -p 8080:3000 majang-api

$ curl localhost:8080
```