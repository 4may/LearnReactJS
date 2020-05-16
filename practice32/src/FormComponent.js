import React from 'react'

//UIロジックだけの関数
//さらなるcomponent化にはreduxを使おう
function FormComponent(props){
    return(
        <form onSubmit={props.handleSubmit}>
            <input 
                type='text'
                name='firstName'
                value={props.data.firstName}
                onChange={props.handleChange}
                placeholder="First Name"
            />
            <br />
            <input 
                type='text'
                name='lastName'
                value={props.data.lastName}
                onChange={props.handleChange}
                placeholder="Last Name"
            />
            <br />
            <input 
                type='text'
                name='age'
                value={props.data.age}
                onChange={props.handleChange}
                placeholder="Age"
            />
            <br />
            <label>
                <input
                    type='radio'
                    name='gender' //nameはプロパティ名と同じ
                    checked={props.data.gender === "male"}
                    value='male' //textとは違って、valueは固定値とする
                    onChange={props.handleChange}
                /> male
            </label>
            <label>
                <input
                    type='radio'
                    name='gender' //nameはプロパティ名と同じ
                    checked={props.data.gender === "female"}
                    value='female' //textとは違って、valueは固定値とする
                    onChange={props.handleChange}
                /> female
            </label>
            <br />
            <select 
                name='location'
                value={props.data.location}
                onChange={props.handleChange}
            >
                {/* 先頭にplaceholderを入れないと、先頭の項目(群馬)を選びたい場合、手間になる。 */}
                <option value=''>-- 行き先を選択してください --</option> 
                <option value='gunma'>群馬</option>
                <option value='tochigi'>栃木</option>
                <option value='ibaraki'>茨城</option>
            </select>
            <br />
            <label>
                <input
                    type='checkbox'
                    name='isVegetarian'
                    checked={props.data.isVegetarian}
                    onChange={props.handleChange}
                /> Vegetarian?
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    name='isKosher'
                    checked={props.data.isKosher}
                    onChange={props.handleChange}
                /> Kosher?
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    name='lactoseFree'
                    checked={props.data.lactoseFree}
                    onChange={props.handleChange}
                /> lactose free?
            </label>
            <br />
            <button>Submit</button>
            <hr></hr>
            <h1>Entered Informatioin:</h1>
            <h2>Your name    : {props.data.firstName} {props.data.lastName}</h2>
            <h2>Age          : {props.data.age}</h2>
            <h2>Gender       : {props.data.gender}</h2>
            <h2>Location     : {props.data.location}</h2>
            {/*Reactでは、Boolean型の値は表示されない。 そのため、true/falseの値に基づいて何らかの文字列を表示する。*/}
            <h2>Dietary restrictions   : {props.data.isVegetarian ? "Yes" : "No"}</h2>
            <h2>Kosher       : {props.data.isKosher ? "Yes" : "No"}</h2>
            <h2>Lactose Free : {props.data.lactoseFree ? "Yes" : "No"}</h2>
        </form>
    )
}

export default FormComponent