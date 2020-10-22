# sample-app

## memo
```shell
# アプリ作成
$ vue create sample-app
$ cd sample-app
$ npm install vue-router

# vuetify
$ vue add vuetify
$ npm install @mdi/font -D
## src/plugins/vuetify.js に以下を追記
##   import '@mdi/font/css/materialdesignicons.css'

# firebase（事前にfirebase上でプロジェクト作っとく）
$ npm run build
$ firebase login
$ firebase init
  Y
  Hosting (spaceでチェック)
  自分のプロジェクトを選択
  pubulic directory? -> dist を入力
  y
$ npm run build
$ firebase deploy  ## これでWebページ公開

# サーバー起動
$ npm run serve

```



- vuetify
  - [マテリアルアイコン](https://material.io/resources/icons/?style=baseline)

- 起動

  - npm run serve

- Firebase
  - 東京のロケーション：asia-northeast1
  - Firebase SDK の追加
    - `public/index.html`の`</body>`の前にコピペ
  - インストール
    - `$ npm install firebase`

- firebase ホスティング

  - インストール

    - `$ npm install -g firebase-tools`

  - 手順

    - 事前に`$ npm run build`