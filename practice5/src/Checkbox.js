import React from "react"

function Checkbox(){
    return(
        <div>
            <p>
                <input type="checkbox" name="subject" value="study" id="react"/>
                <label for="react">Reactの勉強</label>
            </p>
            <p>
                <input type="checkbox" name="subject" value="study" id="gcp"/>
                <label for="gcp">GCPの勉強</label>
            </p>
            <p>
                <input type="checkbox" name="subject" value="study" id="kaggle"/>
                <label for="kaggle">Kaggleの勉強</label>
            </p>
        </div>
    )
}

export default Checkbox