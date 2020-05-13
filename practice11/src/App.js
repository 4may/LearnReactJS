import React from "react"

import Joke from "./Joke"

function App() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const doubled = nums.map(function(num){
        return num ** 2
    })

    console.log(doubled)

    return(
        <div>
            <Joke question="q1" punchLine="p1"/>
            <Joke question="q2" punchLine="p2"/>
            <Joke question="q3" punchLine="p3"/>
            <Joke question="q4" punchLine="p4"/>
            <Joke punchLine="p5"/>
        </div>
    )
}

export default App