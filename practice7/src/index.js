//JS変数をJSX構文の中で使う方法を学ぼう。
import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "Bob"
    const lastName = "Ziroll"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        color: "#FF8C00",
        backgroundColor: "#FF2D00",
        //pxを使う時は、""で括る。
        fontSize: "200px"
    }

    const styles2 = {
        fontSize: 30
    }

    if(hours < 12){
        timeOfDay = "morning"
        //JSは既存のオブジェクトに後からプロパティを追加することができる
        styles2.color = "#04756F"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
        styles2.color = "#2E0927"
    } else {
        timeOfDay = "night"
        styles2.color = "#D90000"
    }

    return (
        <div>
            {/*
            JS変数の値をHTML構文のなかで参照する際は、{}を使う。{}で囲まれた部分はJSの構文として解釈される。

            {}を使わないと、以下のwarningが発生する。

            Compiled with warnings.

            ./src/index.js
            Line 5:11:  'firstName' is assigned a value but never used  no-unused-vars
            Line 6:11:  'lastName' is assigned a value but never used   no-unused-vars
            */}

            {/*{}の仕組みを利用すれば、このようにJSX内でコメントすることができる*/}
            <h1>Wrong:   Hello firstName + " " +lastName!</h1>
            <h1>Correct: Hello {firstName + " " +lastName} !</h1>
            <h1>Correct: Hello {`${firstName} ${lastName}`} !</h1>

            <h1>Correct: It is currently about {date.getHours() % 12} o'clock!</h1>

            {/*JSXの構文が、以下の通り。
            <h1　style={color: "#FF8C00"}>Good {timeOfDay}</h1>
            さらに、styleの値をJavascriptのオブジェクトとして扱いたいので、{}で括る。
            結果的に、二重の{}で括ることになる。
            <h1　style={{color: "#FF8C00"}}>Good {timeOfDay}</h1>*/}
            <h1　style={{color: "#FF8C00"}}>Good {timeOfDay}</h1>

            {/*JSの構文では変数名に-は使えないため、background-colorではなく、backgroundColorを使う。*/}
            <h1　style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}</h1>

            {/*もちろん、変数を指定することも可能 */}
            <h1 style={styles}>Good {timeOfDay}</h1>

            <h1 style={styles2}>Good {timeOfDay}</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))