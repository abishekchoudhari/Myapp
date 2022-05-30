import React from "react";
/*
Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

constructor()
getDerivedStateFromProps()
render()
componentDidMount()
 */
class MountLifeCycle extends React.Component{
    //The constructor method is called, by React, every time you make a component
    constructor(props){
        super(props);
        console.log("constructor() is called");
        this.state={favoritecolor : "red"};
    }

    /*
    The getDerivedStateFromProps method is called right before the render method
    This is the first method that is called when a component gets updated.
    */
    // static getDerivedStateFromProps(props, state){
    //     console.log("getDerivedStateFromProps() method is called")
    //     return {favoritecolor: props.favcol};
    // }

    /*
    The componentDidMount() method is called after the component is rendered.
    This is where you run statements that requires that the component is already placed in the DOM.
    */
    componentDidMount(){
        console.log("componentDidMount() is called");
        setTimeout( () => {
            this.setState({favoritecolor: "white"})
        }, 10);
    }





    //The render() method that actually outputs the HTML to the DOM.
    render(){
        console.log("render() is called");
        return(
            <>
            <h1> Favorite Color: {this.state.favoritecolor} </h1>
            </>
        );
    }


    

}

export default MountLifeCycle;