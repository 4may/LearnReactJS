import React from "react"
import ReactDOM from "react-dom"

//functional component
//render関数の引数にHTMLコードをそのまま書くとわかりづらい。
//以下のようにコンポーネント化(関数化)しておこう。
function MyApp(){
    return (
        <ul>
            <li>list1</li>
            <li>list2</li>
            <li>list3</li>
        </ul>
    )
}

ReactDOM.render(
    //MyApp自体は指定できないため、HTMLタグとして渡す。
    <MyApp />, 
    document.getElementById("root")
)