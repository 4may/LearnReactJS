
import React, {Component} from 'react'

import FormComponent from './FormComponent'

//ビジネスロジックだけのクラス
class FormContainer extends Component{
    constructor(){
        super()

        this.state = {
            firstName : "",
            lastName : "",
            age : "", //0よりも""が好ましい。なぜなら、0だとフォームに0という数字が入力されてしまうため。
            gender : "",
            location : "",
            isVegetarian : false,
            isKosher : false,
            lactoseFree : false

            // componentは複数まとめて扱うことができるが、これだと値の更新がめちゃ煩雑になる。
            // そのため、バラバラに定義する方がわかりやすい。
            // dietaryRestrictions : {
            //     isVegetarian : false,
            //     isKosher : false,
            //     lactoseFree : false
            // }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value})
    }

    handleSubmit(event){

    }

    render(){
        return(
            <FormComponent 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                //渡し方はいくつか有る。
                //1. 渡す側は楽だが、使う側はコードの記述量が多くなる。
                data={this.state}

                //2. 渡す側は大変だが、単純でわかりやすいし、使う側はコードの記述量が少なくなる
                //firstName={this.state.firstName}

                //3. 渡す側も使う側もコードの記述量は少ないが、わかりづらい。
                //{...this.state}
            />
        )
    }
}

export default FormContainer