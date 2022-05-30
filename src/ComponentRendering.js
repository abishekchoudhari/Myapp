import { useState } from "react";
import React from "react";
import Child from "./Child";
import Greet from "./Component/Greet";

function ComponentRendering(){
    const [Count, setCount] = useState(0);

    console.log("Parent Rendered");

    return(
        <div className="wrap">
            <button onClick={() => setCount(Count+1)}>
                Increase
            </button>
            <p>Count: {Count}</p>
            
            <Child name={"ABCD"}/>

            <Greet />
        </div>
    );
}

export default React.memo(ComponentRendering);