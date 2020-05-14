import React from "react"

class App extends React.Component{
    constructor(){
        super()
        //stateプロパティは、propsと同様に事前定義されている。
        //stateは、Component内でだけ使われる。
        console.log("state" + this.state)

        //stateはmutable。
        this.state = {
            answer : "Yes"
        }
    }

    render(){
        //propsはcomponent側では変更できない(immutableである)
        //TypeError: Cannot add property anything, object is not extensible
        //this.props.anything = ""

        //stateはmutable
        //が、注意点として、stateをconsructor以外で直接変更しようとすると、warningが発生する。
        //Line 24:9:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
        //回避策としてはsetState()を使うのだが、あとで説明する。
        this.state.answer = "Yes!!!"

        return(
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
            </div>
        )
    }
}

export default App