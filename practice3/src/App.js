import React from "react"

import Footer from "./Footer"

//App(最上位のcomponent)は、自作のcomponentのみで構成する。
//h1やpなどの標準のHTMLタグをベタガキしないこと。以下のように構成する。
//<Header />
//<MainContent />
//<Footer />
function App () {
    return (
        <div>
            <nav>
                <h1>Hello a third time!</h1>
                <ul>
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                    <li>Thing 3</li>
                </ul>
            </nav>
            <main>
                <p>This is where most of my content will go...</p>
            </main>
            <Footer />
        </div>
    )
}

export default App