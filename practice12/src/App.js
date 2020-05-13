import React from "react"

import Product from "./Product"
import products from "./productsData"

function App(){
    const productComponents = products.map(p => {
        //productsの中身はJSON形式のデータなので、わざわざ自分でプロパティを列挙しなくて良い。
        return <Product key={p.id} product={p}/>
    })

    return(
        <div>
            {productComponents}
        </div>
    )
}

export default App