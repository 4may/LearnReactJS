import React from "react"

function Joke(props){
    return(
        <div className='joke'>
            {/*questionがnullの場合、Questionブロックは表示しない。
              以下のような書き方もできる。
              !props.punchLine && "none"
            */}
            <h1 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h1>
            {/*questionが空なら色を変えてみる */}
            <h2 style={{color: !props.question && "#888888"}}>PunchLine:{props.punchLine}</h2>
        </div>
    )
}

export default Joke