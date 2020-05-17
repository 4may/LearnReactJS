import React, { Component } from 'react'

class App extends Component{
    constructor(){
        super()

        this.state = {
            firstName : ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target

        this.setState({[name] : value})
    }

    render(){
        return(
            <main>
                <form>
                    <input
                        type='text'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </form>
                <p>{this.state.firstName}</p>
            </main>
        )
    }
}

export default App