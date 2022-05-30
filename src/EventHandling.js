import React from "react";
import ReactDom from "react-dom";

function EventHandling(params) {
    //Arrow Function
    const shoot = () => {
        alert("Great shot");
    }

    return(
        <button onClick={shoot}>Take the shoot</button>
    )
}

export default EventHandling;