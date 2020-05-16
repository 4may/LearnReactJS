import React, {Component} from "react"

/*
Formsの値は、stateで管理しよう！
https://reactjs.org/docs/forms.html
*/

class App extends Component{
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    //イベントハンドラは、発生したイベントの情報をeventオブジェクトとして受け取ることができる
    handleChange(event){
        //setStateの前に、値を保持しておく
        const {name, value} = event.target

        //event.tagetは、イベントが発生した(イベントハンドラが登録されている)コンポーネントを指す。ここでは、<input />を指す。
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <form>
                {/*nameプロパティを使うことで、一つのイベントハンドラで複数のFormの値を保持することができる。
                   ただし、stateの変数と、nameプロパティの値は同じにする必要がある。*/}
                <input 
                    type='text'
                    value={this.state.firstName} //明示的にfirstNameの値であることを示す
                    name='firstName' 
                    placeholder='First Name' 
                    onChange={this.handleChange}/>
                <br />
                <input 
                    type='text' 
                    value={this.state.lastName} //明示的にlastNameの値であることを示す
                    name='lastName'
                    placeholder='Last Name' 
                    onChange={this.handleChange}/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App