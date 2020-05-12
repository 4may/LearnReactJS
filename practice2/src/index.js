//MyInfoという名前のfunctional componentを作る。
//MyInfoは、以下のUIを返す。
//1.h1 自分の名前
//2.paragraph 自己紹介
//3.ordered/unordered list 自分の行きたい場所３つ

import React from "react"
import ReactDOM from "react-dom"

//自作モジュールのimportはポイントが２つ
//* 拡張子jsは要らない
//* 相対パスを書く
import MyInfo from "../components/MyInfo"

ReactDOM.render(<MyInfo />, document.getElementById('root'))