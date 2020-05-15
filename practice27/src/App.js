import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()

        this.state = {
            isLoggedIn : false
        }

        this.auth = this.auth.bind(this)
    }

    auth(){
        console.log('state:', this.state.isLoggedIn)
        
        this.setState(prevState => {
            return { isLoggedIn : !prevState.isLoggedIn}
        })
    }

    render(){
        const buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        const displayText = this.state.isLoggedIn ? "Logged in" : "Logged Out"
        return(
            <div className='auth'>
                <button onClick={this.auth}>{buttonText}</button>
                <p>{displayText}</p>
            </div>
        )
    }
}

export default App