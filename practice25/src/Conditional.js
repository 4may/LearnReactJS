import React from "react"

//データロード中(isLoadingがtrueのとき)とデータをロードしていない時(isLoadingがfalseのとき)で呼び出す処理を使い分けよう。
//componentとして、分離するのがポイント。
function Conditional(props){
    return(
        <div>
            <h1>Navbar</h1>

            {/*三項演算子全体を{}で括る必要がある。*/}
            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
            
            <h1>Footer</h1>
        </div>
    )
}

export default Conditional