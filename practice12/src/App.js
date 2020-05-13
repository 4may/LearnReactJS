import React from "react"

import Product from "./Product"
import products from "./productsData"

function App(){
    const productComponents = products.map(product => {
        return <Product key={product.id} name={product.name} price={product.price} description={product.description}/>
    })

    return(
        <div>
            {productComponents}
        </div>
    )
}

export default App