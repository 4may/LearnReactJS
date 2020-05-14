import React, {Component} from "react"

import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends Component{
    constructor(){
        super()

        //todosData(JSONファイルの代わり)をロード
        //constructorでロードすることによって、描画のたびに(render()が呼ばれるたびに)データをロードするのを防ぐ。
        const todoComponents = todosData.map(item => <TodoItem key={item.id} item={item}/>)
        this.state = {
            todoComponents : todoComponents
        }
    }

    render(){
        return(
            <div className='todo-list'>
                {this.state.todoComponents}
            </div>
        )
    }
}

export default App