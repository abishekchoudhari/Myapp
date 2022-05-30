import React from "react";
/*
The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

The render() method is required and will always be called, 
the others are optional and will be called if you define them.
*/

class UpdateLifeCycle extends React.Component{
    constructor(props){ 
        super(props);
        console.log("constructor()")
        this.state = { favoritecolor:"red"};
    }

    /* In the shouldComponentUpdate() method you can return a Boolean value that specifies 
    whether React should continue with the rendering or not. The default value is true. */
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()")
        // return false;
        return true;
    }

    changeColor = () => {
        console.log("change color Arrow function()")
        this.setState({favoritecolor: "black"});
    }


    componentDidMount(){
        console.log("componentDidMount()")
        setTimeout( () => {
            this.setState({favoritecolor: "yellow"});
        }, 10000)
    }

    /*
    In the getSnapshotBeforeUpdate() method you have access to the props and state before the update,
    meaning that even after the update, you can check what the values were before the update.
    If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() 
    method, otherwise you will get an error.
     */
    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log("getSnapshotBeforeUpdate()=> prevProp: " +prevProp.favoritecolor + " prevState: " + prevState.favoritecolor);
        return null;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }


    render(){
        console.log("render()")
        return(
            <div>
                <h1>My favoritecolor: {this.state.favoritecolor}</h1>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

export default UpdateLifeCycle;