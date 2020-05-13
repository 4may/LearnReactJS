import React from "react"

function TodoItem() {
    //部品の作成者は配置を決める。デザインは決めない。
    const styles = {
        width: "100px",
        height: "30px",
        margin: "5px", /*外側の余白*/
        lineHeight: "30px", /*行の高さ*/
        paddingLeft: "5px", /*ラベル内左側の余白*/
        paddingRight: "5px", /*ラベル内右側の余白*/
    }

    return (
        <div>
            <input type="checkbox" id='box'/>
            <label for="box" className="label" style={styles}>check</label>
            <p>Placeholder text here</p>
        </div>
    )
}

export default TodoItem