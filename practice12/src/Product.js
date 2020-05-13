import React from "react"

function Product(props){
    return(
        <div className='product'>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <h2>{props.description}</h2>
        </div>
    )
}

export default Product