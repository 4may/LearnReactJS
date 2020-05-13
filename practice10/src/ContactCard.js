import React from "react"

//propsという名前の辞書として、引数を受け取る。
function ContactCard(props) {
    console.log(props)
    return(
        <div className="contact-card">
            <img src={props.contact.imgUrl} alt=""/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard