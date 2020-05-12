//JS変数をJSX構文の中で使う方法を学ぼう。
import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "Bob"
    const lastName = "Ziroll"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours < 12){
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        /*
        JS変数の値をHTML構文のなかで参照する際は、{}を使う。{}で囲まれた部分はJSの構文として解釈される。

        {}を使わないと、以下のエラーが発生する。

        Compiled with warnings.

        ./src/index.js
        Line 5:11:  'firstName' is assigned a value but never used  no-unused-vars
        Line 6:11:  'lastName' is assigned a value but never used   no-unused-vars
        */
        <div>
            <h1>Wrong:   Hello firstName + " " +lastName!</h1>
            <h1>Correct: Hello {firstName + " " +lastName} !</h1>
            <h1>Correct: Hello {`${firstName} ${lastName}`} !</h1>

            <h1>Correct: It is currently about {date.getHours() % 12} o'clock!</h1>

            <h1>Good {timeOfDay}</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))