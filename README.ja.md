# React Enterprise Boilerplate

## このプロダクトは何？
React で業務用 Web アプリケーションを作るためのボイラープレート。ひと通り必要そうなものがあらかじめ用意されています。

[グロービス](http://www.globis.co.jp/)が提供しているものですが、グロービスの各プロダクトにおけるフロントエンド開発の基盤となるものとして作られており、実際のプロダクト開発の際にはまずこのリポジトリを clone して始められています。  
またこちらのリポジトリも、実際のプロダクトコードに合わせて開発チームの最新の知見が随時反映されていく予定です。

このボイラープレートのベースとなるものは [create-react-app](https://github.com/facebookincubator/create-react-app) を使って生成されていますが、`npm run eject` を実行しているので、CRA の各コマンドは使えません。CRA についての情報は[公式のドキュメント](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)を参照してください。

## 各種スクリプト
- `yarn start` …  [webpack-dev-server](https://github.com/webpack/webpack-dev-server) が起動して http://localhost:3000/ でアプリにアクセスできます。サーバ API >には https://stg-api.digital.globis.co.jp/api/v2 を使用します。
- `yarn start:virtual` …  [webpack-dev-server](https://github.com/webpack/webpack-dev-server) が起動して http://localhost:3000/ でアプリにアクセスできます。サー
バ API には  Swagger のモックサーバである https://glopla-enterprise.herokuapp.com/api/v2/ を使用します。
- `yarn build` …  `./build/dist/` ディレクトリにコンパイルビルドされた本番アプリ
用のファイル群が出力されます。
- `yarn test` …  ユニットテストが [Jest](https://facebook.github.io/jest/) によ>って即時実行されます。
- `yarn test:open` …  ユニットテストが [Jest](https://facebook.github.io/jest/) によって対話型環境で実行されます。
- `yarn test:e2e` …  E2Eテストが [TestCafe](https://devexpress.github.io/testcafe/) によって実行されます。実行環境は Headless Crhome です。
- `yarn test:e2e:chrome` …  E2Eテストが [TestCafe](https://devexpress.github.io/testcafe/) によって実行されます。実行環境は Crhome ブラウザです。
- `yarn storybook` …  [Storybook](https://storybook.js.org/) によって作成された>スタイルガイドが http://localhost:9001/ で起動します。
- `yarn storybook:build` …  `./build/storybook/` ディレクトリにコンパイルビルド>された Storybook のファイル群が出力されます。
- `yarn lint` …  [TSLint](https://palantir.github.io/tslint/) によって文法チェッ
クが実行されます。

なお、`git commit` を実行するとその前に Lint チェックが実行され、チェックが通らないと commit ができないように設定してあります。


## 言語
一部の設定ファイル等を除き、基本的にほとんどが TypeScript で記述されています。
また、TSLint および Prettier も導入済み。

- [TypeScript](https://www.typescriptlang.org/)
- [TSLint](https://palantir.github.io/tslint/)
- [tslint-config-airbnb](https://www.npmjs.com/package/tslint-config-airbnb)
- [tslint-react](https://www.npmjs.com/package/tslint-react)
- [stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [tslint-plugin-prettier](https://www.npmjs.com/package/tslint-plugin-prettier)
- [tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier)
- [prettier-stylelint](https://www.npmjs.com/package/prettier-stylelint)


## ディレクトリ構造
```
react-enterprise-boilerplate
├── .storybook/
├── config/
├── node_modules/
├── public/
├── scripts/
└── src/
    ├── actions/
    ├── components/
    ├── containers/
    ├── helpers/
    ├── locales/
    ├── reducers/
    └── selectors/
        ├── github/
        └── petstore/
    └── services/
        ├── github/
        └── petstore/
    ├── stories/
    ├── tasks/
    ├── utils/
    ├── App.tsx
    └── index.tsx
└── testcafe/
        └── features/
├── i18n.ts
├── store.ts
├── package.json
├── tsconfig.json
├── tsconfig.test.json
├── tslint.json
├── yarn.lock
└── README.md
```

## 推奨エディタ

開発者は [Visual Studio Code](https://code.visualstudio.com/) を使っており、このプロダクトもそれに最適化された形で開発されています。

### インストールを推奨する VSCode プラグイン

- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
