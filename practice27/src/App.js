import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()

        this.state = {
            isLoggedIn : false,
            
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
        return(
            <div className='auth'>
                { 
                this.state.isLoggedIn ?
                <div>
                    <button onClick={this.auth}>LogOut</button>
                    <p>Log in!</p>
                </div>
                : 
                <div>
                    <button onClick={this.auth}>LogIn</button>
                    <p>Log out!</p>
                </div>
                }
            </div>
        )
    }
}

export default App