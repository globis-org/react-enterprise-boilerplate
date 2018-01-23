# React Enterprise Boilerplate

_※このドキュメントはまだ書きかけです_

React で業務用 Web アプリケーションを作るためのボイラープレート。
ひと通り必要そうなものをあらかじめ用意しました。

このプロダクトは[グロービス](http://www.globis.co.jp/)が提供しています。
グロービスの各プロダクトにおけるフロントエンド開発のベースとなるものとして開発され、一般に公開しているものです。
自社プロダクトの開発状況に伴って、随時アップデートをかけていく予定です。

## 言語

一部の設定ファイル等を除き、基本的にほとんどが TypeScript で作られています。
また、TSLint および Prettier も導入済み。

- [TypeScript](https://www.typescriptlang.org/)
- [TSLint](https://palantir.github.io/tslint/)
- [tslint-config-airbnb](https://www.npmjs.com/package/tslint-config-airbnb)
- [tslint-react](https://www.npmjs.com/package/tslint-react)
- [Prettier](https://prettier.io/)
- [tslint-plugin-prettier](https://www.npmjs.com/package/tslint-plugin-prettier)
- [tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier)


## 推奨エディタ

このボイラープレートの開発者は [Visual Studio Code](https://code.visualstudio.com/) を使っています。
それ以外のエディタおよび IDE での動作については関知しません。

### インストールを推奨する VSCode プラグイン

- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Beautify css/sass/scss/less](https://marketplace.visualstudio.com/items?itemName=michelemelluso.code-beautifier)


## 現状での不具合

### Formik を使ったコンポーネントに外から任意の props を渡せない

以下の Issues で報告されている現象と根は同じですが、[FormikValues](https://github.com/jaredpalmer/formik/blob/master/src/formik.tsx) を props に注入したコンポーネントを TSX にマウントして呼ぶとき、任意の props を渡そうとすると Type Error が発生してコンパイルに失敗します。

- [Impossible to use custom props in Field component · Issue #232 · jaredpalmer/formik](https://github.com/jaredpalmer/formik/issues/232)
- [Compilation error with TypeScript in strict mode on · Issue #283 · jaredpalmer/formik](https://github.com/jaredpalmer/formik/issues/283)
- [FormikConfig has a generic type of an empty object · Issue #314 · jaredpalmer/formik](https://github.com/jaredpalmer/formik/issues/314)

```tsx
import Foo from 'components/Foo'; // props are injected FormikValues

Foo.defaultProps = { bar: 'buz' }; // OK

const Qux: React.SFC<{}> = () => (
  <Foo />    // OK
  <Foo bar={'buz'} />    // Type error!
);
```

エラーの中身としては `Property 'bar' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<Pick<{ onSubmit: (bar: string) => Thun...'.` のように表示されますが、Formik の開発者によるとこれは TypeScript のバグということで、2018年1月現在に至るまで解決されていません。

このため現状、Formik を使ったコンポーネントではマウントして props を渡して結果を検証する形式のテストができません。
このボイラープレートでも、props にスタブの関数を渡してアクションログを取る Storybook のアドオンである [@storybook/addon-actions](https://github.com/storybooks/storybook/tree/master/addons/actions) が動作しないため、導入を断念しています。同じ理由で、props の値を任意に書き換えられる [@storybook/addon-knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs) も、Formik を合成したコンポーネントには適用していません。

バグが解消され次第、これらも使えるようにしていきたいと考えています。
