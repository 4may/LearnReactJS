import React, {Component} from 'react'

//参考
//https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282
class App extends Component{
    constructor(){
        super()
        this.state = {}
    }

    /*
    React lifecycle methods
    reactでは、複数のcomponent間でpropやstateのやり取りが行われる。
    やり取りの際には、複数のメソッドが呼ばれる。その仲介役となるメソッドのことをlifecycle methodと呼ぶ。
    ここでは、代表的なlifecycleメソッドを学んでみよう。
    */
    componentDidMount(){
        //初めてrenderした後に呼ばれるメソッド。
        //主に、外部リソースからデータをロードする時に使われる。
        //constructor()や、render()ではデータをロードしないこと。
    }

    /*!! 非推奨になった !!*/
    UNSAFE_componentWillReceiveProps(nextProps){
        //親コンポーネントからpropsを受け取る時に呼ばれるメソッド
        if(nextProps.whatever !== this.props.whatever){
            //do something important here
        }
    }

    /*componentWillReceiveProps の代わりとなる新しいメソッd*/
    shouldComponentUpdate(nextProps, nextState){
        //renderするかどうかを制御するメソッド
        //不必要なrenderingが行われないようにすることで、アプリの性能を向上させよう！
    }

    componentWillUnmount(){
        //componentを削除する前の後始末をするメソッド
        //例えば、componentに紐付くeventListenerを削除するなど
    }

    render(){
        return(
            <div>
                Code goes here
            </div>
        )
    }
}

export default App