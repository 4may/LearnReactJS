//* １ファイル１コンポーネントが基本
//* コンポーネント名とファイル名は同じにしよう
//* ReactはJSXをJSに変換するために必要。したがって、JSXを使っているコードにはReactが必要。
//* 他のファイルでも使えるようにするには、明示的にexport文を書く。その際、呼び出しがわはimport分が必要になる。

import React from "react"

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

export default MyInfo