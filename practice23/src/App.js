import React, {Component} from 'react'

import TodoItem from "./TotoItem"
import todosData from "./todosData"

class App extends Component{
    constructor(){
        super()

        this.state = {
            todos : todosData
        }

        //handleChange()でAppオブジェクトを参照できるようにする
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            //checkedはTodoItem.completed変数の値を参照しているため、TodoItem.completed変数の値が変化すればcheckedの値を変えることができる。
            //つまり、チェックボックスのチェックのON/OFFを切り替えることができる。

            const updatedTodos = prevState.todos.map(item => {
                //変えなければいけない値だけ変える。
                if (item.id === id){
                    item.completed = !item.completed
                }

                return item
            })

            //新しいデータの作成と、Stateの更新処理は分けて書く方がわかりやすい。
            return {
                todos : updatedTodos
            }
        })
    }

    render(){
        const todoComponents = this.state.todos.map(item => 
            <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return(
            <div className="todo-list">
                {todoComponents}
            </div>
        )
    }
}

export default App