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

    公式のチートシートがある。わかりやすい。
    https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    3つの非推奨メソッドについては、公式のブログポストを読む
    https://ja.reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
    https://ja.reactjs.org/blog/2018/03/27/update-on-async-rendering.html
    要点は以下の通り。
    * 3つのメソッドがエラーハンドリングの妨げとなり、結果としてメモリーリークを引き起こしていた。
    * 3つのメソッドを廃止し、新しいメソッドを追加することで、非同期的なrenderingがよりわかりやすくできるようになる。
        * 3つのメソッドは誤用を招いていた
    * メジャーバージョン17までは使うことができる。(既存APIの移行期間を設けている。)
    */

    static getDrivedStateFromProps(props, state){
        //propsからstateを更新するメソッド
        //UNSAFE_componentWillReceiveProps()のsafe版
    }

    getSnapshotBeforeUpdate(){
        // 更新前に現在のバックアップを作成するメソッド
    }

    /*!! 非推奨 !!*/
    UNSAFE_componentWillMount(){

    }

    componentDidMount(){
        //初めてrenderした後に呼ばれるメソッド。
        //主に、外部リソースからデータをロードする時に使われる。
        //constructor()や、render()ではデータをロードしないこと。
    }

    /*!! 非推奨 !!*/
    UNSAFE_componentWillReceiveProps(nextProps){
        //親コンポーネントからpropsを受け取る時に呼ばれるメソッド
        if(nextProps.whatever !== this.props.whatever){
            //do something important here
        }
    }

    /*!! 非推奨 !!*/
    UNSAFE_componentWillUpdate(){

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