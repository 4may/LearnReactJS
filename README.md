# React
* [Learn React JS - Full Course for Beginners - Tutorial 2019](https://www.youtube.com/watch?v=DLX62G4lc44)

## 環境構築

以下をインストール

* [anyenv](https://github.com/anyenv/anyenv)
* [nodenv](https://github.com/nodenv/nodenv)
* [nodenv-yarn-install](https://github.com/pine/nodenv-yarn-install)

npmよりもyarnのが速くて、コマンドがシンプルらしい。エディタはとりあえずvs codeを使う。

## ハマりどころ

```
動画のようにindex.html, index.js, style.cssを作るだけでは動かない・・・
```

**原因**

reactとして動かすためにはいろいろお膳立てが必要なようだ

**解決策**

[ここ](https://medium.com/mtholla/react-app-from-scratch-in-5-steps-e72d82034d5a)を参考に、スクラッチでreact appを作ってみる。

---

```
zsh: command not found: webpack-dev-server
```

**原因**

node_modules/.binまでのpathが通っていない

**解決策**

* 環境変数PATHに./node_modules/.binを追加する
* [package.jsonにコマンドを追加する](https://stackoverflow.com/questions/31611527/webpack-webpack-dev-server-command-not-found)　※おすすめ

---

```
ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module '@babel/core'  
```

**原因**

babel-loader/lib/index.jsが依存しているのは7系(最新バージョン)のbabelだが、インストールされているのが6系(一つ前のメジャーバージョン)のbabelであるため。

なぜ、6系のbabelがインストールされているかというと、yarn add時のbabel coreの指定方法が関係している。

以下のコマンドでは6系のbabelがインストールされる。

```
yarn add --dev babel-core
```

7系のbabelをインストールするには、以下のコマンドを使う

```
yarn add --dev @babel/core
```

ちなみに、モジュールインストール時にwarningが出ていた。

```
babel-loader@8.1.0" has unmet peer dependency "@babel/core@^7.0.0".
```

**解決策**

* 6系のbabelを参照するようにする
* 7系のbabelをインストールする。

最新版を使いたいので、後者を採用。なお、すでに6系のbabelが入っているので、[公式のマイグレーションツール](https://github.com/babel/babel-upgrade)を使って、7系のbabelにしてみよう

babel-upgradeをインストールする

```
yarn global add babel-upgrade
```

マイグレーション

```
babel-upgrade --write --install
```

---

```
ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module 'babel-preset-env' from '~/ReactDOM_JSX'
```

**原因**

babel6からbabel7に変わる際に、webpack.config.jsのpresetsの値の指定方法が変わった。

* babel6

```
presets : ['env']
```

* babel7

```
presets: ['@babel/preset-env']
```

**解決策**

上記の通り。

