import React from "react"

import todosData from './todosData'
import TodoItem from './TodoItem'

function App(){
    const todoComponents = todosData.map(item => <TodoItem key={item.key} todoItem={item}/>)

    return(
        <div className="todo-list">
            {todoComponents}
        </div>
    )
}

export default App