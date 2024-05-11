# 概要

- 軽量な API 構成を検討するためのリポジトリ
- cloudRun で動作させることを前提とする

## アプリケーションの起動

### 方法 1（ts-node を用いた起動）

```
$ num run build

$ npm run dev
```

### 方法 2（Docker を用いた起動）

```
$ npm run build

$ docker build ./ --tag majang-api:v1.0.0

$ docker run -p 8080:3000 majang-api:v1.0.0

$ curl localhost:8080
```
