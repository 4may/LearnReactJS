import React, {Component} from "react"

class App extends Component{
    constructor(){
        super()
        
        this.state = {
            isLoggedIn : false
        }
    }

    render(){
        let state_of_user = this.state.isLoggedIn ? "in" : "out"
        return(
            <div>
                <h1>You are currently logged {state_of_user}</h1>
            </div>
        )
    }
}

export default App