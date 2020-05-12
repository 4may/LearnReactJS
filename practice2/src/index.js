//MyInfoという名前のfunctional componentを作る。
//MyInfoは、以下のUIを返す。
//1.h1 自分の名前
//2.paragraph 自己紹介
//3.ordered/unordered list 自分の行きたい場所３つ

import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
    return (
        //複数のUIコンポーネントはdivタグでくくる
        <div>
            <h1>Four May</h1>
            <p>I Love cake!</p>
            <ol>
                <li>banana</li>
                <li>apple</li>
                <li>blueberry</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById('root'))