import React from "react";
/*
The next phase in the lifecycle is when a component is removed from the DOM, 
or unmounting as React likes to call it.
React has only one built-in method that gets called when a component is unmounted:

componentWillUnmount()

The componentWillUnmount method is called when the component is about to be removed from the DOM.
*/

class UnmountLifeCycle extends React.Component{
    constructor(props){
        super(props);
        console.log("UnmountLifeCycle constructor");
        this.state= {show: true};
    }

    delHeader = () => {
        console.log("delHeader () arrow function");
        this.setState({show: false});
    }

    render(){
        console.log("UnmountLifeCycle render()");
        let myHeader;
        if(this.state.show){
            myHeader = <Child />
        };

        return(
            <div>
                {myHeader}
                <button onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    }
} 


class Child extends React.Component{
    componentWillUnmount(){
        console.log("Child componentWillUnmount()");
        alert("The component named Header is to be unmounted");
    }

    render(){
        console.log("Child render()");
        return(
            <h1>Hello world</h1>
        )
    }
}

export default UnmountLifeCycle;