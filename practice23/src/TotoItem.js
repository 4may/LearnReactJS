import React, {Component} from 'react'

class TodoItem extends Component{
    render(){
        return(
            <div className="todo-item">
                <input type='checkbox' 
                       /* 以下のコードでもOK
                          onChange={() => this.props.handleChange(this.props.item.id)} */
                       onChange={this.props.handleChange.bind(this, this.props.item.id)} 
                       checked={this.props.item.completed} />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem