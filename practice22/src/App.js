import React, {Component} from "react"

class App extends Component{
    constructor(){
        super()

        this.state = {
            count : 0
        }
    }

    render(){
        return(
            <div className="counter">
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({count : this.state.count + 1})}>Change!</button>
            </div>
        )
    }
}

export default App