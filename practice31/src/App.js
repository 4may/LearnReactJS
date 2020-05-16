import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()

        this.state = {
            firstName : "",
            lastName : ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target

        this.setState(
            //[name]によって、name変数の値を取得する
            { [name] : value }
        )
    }

    render(){
        return(
            <div>
                <input 
                    type='text' 
                    value={this.state.firstName}
                    name='firstName'
                    onChange={this.handleChange}
                    placeholder='First Name'
                />
                <br />
                <input 
                    type='text' 
                    value={this.state.lastName}
                    name='lastName'
                    onChange={this.handleChange}
                    placeholder='Last Name'
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </div>
        )
    }
}

export default App