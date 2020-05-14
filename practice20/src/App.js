import React from "react"

//ハンドラ関数
function handleClick(){
    console.log("I was clicked")
}

function App(){
    return (
        <div>
            <img onMouseOver={() => console.log("Hover!")} src="https://www.fillmurray.com/200/100" alt=""/>
            <br />
            <br />
            {/*関数を直書きするパターン */}
            <button onClick={() => console.log("Clicked!")}>Click me</button>
            {/*定義ずみの関数を指定するパターン */}
            <button onClick={handleClick}>Click me2</button>
        </div>
    )
}

export default App