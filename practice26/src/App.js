import React, {Component} from 'react'
import Conditional from "./Conditional"

class App extends Component{
    constructor(){
        super()

        this.state = {
            unreadMessages: [
                "Call your mom!",
                "New spam email available. All links are definitely safe to click."
            ]
            //unreadMessages : []
        }
    }

    render(){
        return(
            //falseの時の挙動だけを定義したいときは、三項演算子を&&で置き換えられる。
            //条件 && falseのときの挙動
            //これは、論理積は初めてfalseとなった際の項の結果を返す、という性質を利用している。
            <div>
                {
                    this.state.unreadMessages.length > 0 &&
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App