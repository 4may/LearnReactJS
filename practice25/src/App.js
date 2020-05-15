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
            <div>
                <Conditional isLoading={this.state.isLoading} />
            </div>
        )
    }
}

export default App