import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {
    //各componentを一意に識別できるkeyを渡さないと、warningが出る。
    //index.js:1 Warning: Each child in a list should have a unique "key" prop.
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)

    return(
        <div>
            {jokeComponents}
        </div>
    )
}

export default App