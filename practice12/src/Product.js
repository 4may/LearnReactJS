import React from "react"

function Product(props){
    return(
        <div className='product'>
            <h1>{props.product.name}</h1>
            <p>{props.product.price.toLocaleString("ja-JP", {style: "currency", currency: "JPY"})}
            - {props.product.description}</p>
        </div>
    )
}

export default Product