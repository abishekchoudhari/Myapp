import React from "react";
import ReactDom from "react-dom";

//Condition &&

function Example() {
    const counter = 5;
    
    return(
        <div>
            {
                (counter===5)&&
                <h1>Welcome</h1>
            }
        </div>
    )
}

export default Example;