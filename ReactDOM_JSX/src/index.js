import React from "react";
import ReactDom from "react-dom";

import App from './App';

//ウィンドウを描画
//第一引数:描画するもの、第二引数：描画場所(root)
//第一引数はJSX elementと呼ぶ。
//Reactコンポーネントによりコンパイルされる。Reactをimportしていない場合エラーになる
ReactDom.render(<App />, document.getElementById("app"));

//二つ以上のJSX elementを続けて書くことはできない. 以下のエラーが表示される。
//JSX expressions must have one parent element.ts(2657)
//ReactDom.render(<h1>Hello World!</h1><p>This does't work</p>, document.getElementById("root"))