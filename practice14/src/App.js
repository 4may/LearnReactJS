import React from "react"

//class componentのポイントは3つ
//1.React.Componentプロトタイプを継承する
//2.render()関数を実装する. render関数は、function componentそのものだ。
//3.呼び出し元からの変数はthis.propsで取得する。関数の引数では受け取らない。
class App extends React.Component{

    //自作の関数を定義
    yourMethodHere(){
         return { }
    }

    render(){
        //描画に関する情報は、render()の中にかく。
        const date = new Date()
        console.log(date)

        //自作関数を呼び出す
        const style = this.yourMethodHere()
        console.log(style)

        console.log(this.props.text)
        return(
            <div>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

export default App