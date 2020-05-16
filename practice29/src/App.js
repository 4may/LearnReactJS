import React, {Component} from 'react'

/*
以下の二つのAPIを使って、
* fetch (PromiseベースのHTTPライブラリ)
* swapi (swのAPI https://swapi.dev/) ※現在は動画とパスが異なっているので注意

promiseについては、以下の記事が参考になる。

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
*/

class App extends Component{
    constructor(){
        super()

        this.state = {
            loading : true, //loading画面のために追加
            character : {}
        }
    }

    componentDidMount(){
        //characterは含めなくても良い。
        this.setState({loading : true}) //loading画面のために追加

        fetch("https://swapi.dev/api/character/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading : false, //loading画面のために追加
                    character : data
                })
            })
    }

    render(){
        const text = this.state.loading ? "Loading..." : this.state.character.name

        return(
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App