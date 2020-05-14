import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component{
    render(){
        return(
            <div>
                <Header username="Simon"/>
                <Greeting />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greeting extends React.Component{
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) timeOfDay = "Good Morning"
        else  if (hours < 15) timeOfDay = "Good afternoon"
        else if (hours < 21) timeOfDay = "Good evening"
        else timeOfDay = "Good night"

        return(
            <p>{timeOfDay} to you, sir or madam!</p>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))