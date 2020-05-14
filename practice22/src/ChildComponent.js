import React, {Component} from "react"

class ChildComponent extends Component{
    render(){
        return(
            <h1>Child count: {this.props.count}</h1>
        )
    }
}

export default ChildComponent