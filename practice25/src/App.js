import React, {Component} from 'react'
import Conditional from "./Conditional"

class App extends Component{
    constructor(){
        super()

        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        //API呼び出しの代わり
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render(){
        return(
            //isLoadingを定義しているクラスが、呼び出す処理を使い分ける。
            <div>
                {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
            </div>
        )
    }
}

export default App