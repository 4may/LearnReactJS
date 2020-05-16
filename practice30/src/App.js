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
        this.handleChange2 = this.handleChange2.bind(this)
    }

    //イベントハンドラは、発生したイベントの情報をeventオブジェクトとして受け取ることができる
    handleChange(event){
        //event.tagetは、イベントが発生した(イベントハンドラが登録されている)コンポーネントを指す。ここでは、<input />を指す。
        this.setState({
            firstName : event.target.value
        })
    }

    handleChange2(event){
        //event.tagetは、イベントが発生した(イベントハンドラが登録されている)コンポーネントを指す。ここでは、<input />を指す。
        this.setState({
            lastName : event.target.value
        })
    }

    render(){
        return(
            <form>
                <input type='text' placeholder='First Name' onChange={this.handleChange}/>
                <br />
                <input type='text' placeholder='Last Name' onChange={this.handleChange2}/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App