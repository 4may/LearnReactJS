import React from "react"

import Joke from "./Joke"

function App() {
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