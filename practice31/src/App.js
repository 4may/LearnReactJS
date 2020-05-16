import React, {Component} from 'react'

//formikが便利
class App extends Component{
    //=======================ビジネスロジック============================
    constructor(){
        super()

        this.state = {
            firstName : "",
            lastName : "",
            comment : "",
            isFriendly : true,
            gender : "",
            favColor : "blue"
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        //checkboxの場合、valueプロパティの代わりにcheckedプロパティを使う必要がある。
        //そのため、typeでcheckboxとcheckbox以外とを棲み分けるひつようがある。
        const { name, value, type, checked } = event.target

        type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
    }
    //================================================================

    //=========================UIロジック==============================
    render(){
        return(
            <div>
                <input 
                    type='text' 
                    value={this.state.firstName}
                    name='firstName'
                    onChange={this.handleChange}
                    placeholder='First Name'
                />
                <br />
                <input 
                    type='text' 
                    value={this.state.lastName}
                    name='lastName'
                    onChange={this.handleChange}
                    placeholder='Last Name'
                />
                <br />
                <textarea 
                    value={"some default value"}
                    name='comment'
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input 
                        type='checkbox' 
                        checked={this.state.isFriendly}
                        name="isFriendly"
                        onChange={this.handleChange}
                    /> isFriendly?
                </label>
                <br/>
                <label>
                    <input 
                        type='radio'
                        name="gender"
                        value='male'
                        checked={this.state.gender === "male"} /*チェックをつける条件を定義する */
                        onChange={this.handleChange}
                    /> Male
                </label>
                <label>
                    <input 
                        type='radio' 
                        name="gender"
                        value='female'
                        checked={this.state.gender === "female"} /*チェックをつける条件を定義する */
                        onChange={this.handleChange}
                    /> Female
                </label>

                <br/>
                <label>Favorite color:</label>
                <select
                    name='favColor'
                    value={this.state.favColor}
                    onChange={this.handleChange}
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favColor}</h2>
            </div>
        )
    }
    //================================================================
}

export default App