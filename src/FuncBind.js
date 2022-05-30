import React from "react";
import { ReactDOM } from "react-dom";

class FuncBind extends React.Component{
    // Initialising state
    state = {
        name: 'demo',
    };

    handler = (name) => {
        // Changing the state
        this.setState({
            name: name
        });
    }

    render(){
        return(
            <div>
                <h1> Name: {this.state.name} </h1>
                <h1>Click to change name</h1>

                {/* Passing the name as an argument 
                to the handler() function */}

                <button onClick={this.handler.bind(this, "welcome")}>Click me</button>
            </div>
        );
    }
}

export default FuncBind;