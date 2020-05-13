import React from "react"

import ContactCard from './ContactCard'

function App() {
    return(
        <div className="contacts">
            {/*
            React propertyの例その２
            個別のプロパティとして渡すのではなく、各プロパティ名とプロパティ値をkey-valueとして持つ一つの辞書で渡す
            入力としてJSONの中身を渡す時に都合が良い。
            */}
            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl:"http://placekitten.com/300/200", phone:"(212) 555-1234", email:"mr.whiskaz@catnap.meow"}}
            />

            <ContactCard 
                contact={{name:"Fluffykins", imgUrl:"http://placekitten.com/100/200", phone:"(212) 555-2345", email:"fluff@me.com"}}
            />

            <ContactCard
                contact={{name:"Destroyer", imgUrl:"http://placekitten.com/400/300", phone:"(212) 555-3456", email:"ofwordls@yahoo.com"}}
            />

            <ContactCard 
                contact={{name:"Felix", imgUrl:"http://placekitten.com/200/100", phone:"(212) 555-4567", email:"thecat@hotmail.com"}}
            />
        </div>
    )
}

export default App