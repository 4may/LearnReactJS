import React, {Component} from "react"

import ChildComponent from "./ChildComponent"
class App extends Component{
    constructor(){
        super()

        this.state = {
            count : 0
        }

        //以下のようにhandleClick関数で使用するthisを、Appにバインドしておく必要がある。
        //でないと、以下のエラーが発生する。
        //TypeError: Cannot read property 'setState' of undefined
        //これは、handleClick関数がglobalオブジェクトに属しているため、バインドしないとAppオブジェクトではなくglobalオブジェクトを参照してしまうから。
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        //以下のように、直接stateを変えることはできない。
        //this.state.count = 1

        //新しいstateオブジェクトを渡す
        //this.setState({count : this.state.count + 1})

        //setStateは関数内部でstateにアクセスできる。
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }

    render(){
        return(
            <div className="counter">
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                {/*this.state.countの変化が、ChildComponentにも伝播する */}
                <ChildComponent count={this.state.count}/>
            </div>
        )
    }
}

export default App