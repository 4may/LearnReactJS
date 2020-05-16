import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()

        this.state = {
            firstName : "",
            lastName : "",
            age : "",
            gender : "",
            location : "",
            isVegetarian : false,
            isKosher : false,
            lactoseFree : false
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
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="First Name"
                />
                <br />
                <input 
                    type='text'
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder="Last Name"
                />
                <br />
                <input 
                    type='text'
                    name='age'
                    value={this.state.age}
                    onChange={this.handleChange}
                    placeholder="Age"
                />
                <br />
                <label>
                    <input
                        type='radio'
                        name='gender' //nameはプロパティ名と同じ
                        checked={this.state.gender === "male"}
                        value='male' //textとは違って、valueは固定値とする
                        onChange={this.handleChange}
                    /> male
                </label>
                <label>
                    <input
                        type='radio'
                        name='gender' //nameはプロパティ名と同じ
                        checked={this.state.gender === "female"}
                        value='female' //textとは違って、valueは固定値とする
                        onChange={this.handleChange}
                    /> female
                </label>
                <br />
                <select 
                    name='location'
                    value={this.state.location}
                    onChange={this.handleChange}
                >
                    <option value='gunma'>群馬</option>
                    <option value='tochigi'>栃木</option>
                    <option value='ibaraki'>茨城</option>
                </select>
                <br />
                <label>
                    <input
                        type='checkbox'
                        name='isVegetarian'
                        checked={this.state.isVegetarian}
                        onChange={this.handleChange}
                    /> Vegetarian?
                </label>
                <br />
                <label>
                    <input
                        type='checkbox'
                        name='isKosher'
                        checked={this.state.isKosher}
                        onChange={this.handleChange}
                    /> Kosher?
                </label>
                <br />
                <label>
                    <input
                        type='checkbox'
                        name='lactoseFree'
                        checked={this.state.lactoseFree}
                        onChange={this.handleChange}
                    /> lactose free?
                </label>
                <br />
                <button>Submit</button>
                <hr></hr>
                <h1>Entered Informatioin:</h1>
                <h2>Your name    : {this.state.firstName} {this.state.lastName}</h2>
                <h2>Age          : {this.state.age}</h2>
                <h2>Gender       : {this.state.gender}</h2>
                <h2>Location     : {this.state.location}</h2>
                <h2>Dietary restrictions   : {this.state.isVegetarian}</h2>
                <h2>Kosher       : {this.state.isKosher}</h2>
                <h2>Lactose Free : {this.state.lactoseFree}</h2>
            </form>
        )
    }
}

export default App