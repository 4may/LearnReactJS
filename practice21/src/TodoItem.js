import React, {Component} from "react"

class TodoItem extends Component{
    render(){
        return(
            <div className="todo-item">
                {/*Warning: Failed prop type: You provided a `checked` prop to a form field without an `onChange` handler. 
                   This will render a read-only field. If the field should be mutable use `defaultChecked`. 
                   Otherwise, set either `onChange` or `readOnly`. */}
                <input type="checkbox" onChange={() => console.log("changed!")} checked={this.props.item.completed}></input>
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem