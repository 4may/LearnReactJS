import React, {Component} from "react"

import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends Component{
    constructor(){
        super()

        this.state = {
            todos : todosData
        }
    }

    render(){
        const todoComponent = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)

        return(
            <div className="todo-list">
                {todoComponent}
            </div>
        )
    }
}

export default App