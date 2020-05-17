import React, { Component } from 'react'

class App extends Component{
    //クラスプロパティとして宣言できるようになった。
    //これによって、コンストラクタを記述する必要がなくなった。
    state = {
        firstName : ""
    }

    //Component内の関数をアロー関数として表記できるようになった。
    //これによって、bindを記述する必要がなくなった。(アロー関数は、関数自体にはthisを持たず、その外のクラス(App)をthis)とみなす) 
    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({[name] : value})
    }

    render(){
        return(
            <main>
                <form>
                    <input
                        type='text'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </form>
                <p>{this.state.firstName}</p>
            </main>
        )
    }
}

export default App