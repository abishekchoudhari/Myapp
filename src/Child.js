import React from "react";
function Child(props) {
    console.log("Child Rendered");

    return(
        <div>
            <h1> Child Name: {props.name} </h1>
        </div>
    )
}

/*Using Hooks we can prevent the rendering for the function,
buy using React.memo
*/
export default React.memo(Child);