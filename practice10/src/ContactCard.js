import React from "react"

//propsという名前の辞書として、引数を受け取る。
function ContactCard(props) {
    console.log(props)
    return(
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard