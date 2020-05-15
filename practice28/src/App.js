import React from 'react'

import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component{
    constructor(){
        super()

        this.state = {
            todos : todosData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedComponent = prevState.todos.map(item => {
                if(item.id === id){
                    item.completed = !item.completed
                }
    
                return item
            })

            return{
                todos : updatedComponent
            }
        })
    }

    render(){
        const todoComponents = this.state.todos.map(item => 
            <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return(
            <div className='todo-list'>
                {todoComponents}
            </div>
        )
    }
}

export default App