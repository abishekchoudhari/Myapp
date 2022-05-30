import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Example from "./Example";
import reportWebVitals from "./reportWebVitals";
import EventHandling from "./EventHandling";
import FuncBind from "./FuncBind";
import ConditionalRendering from "./ConditionalRendering";
import ComponentRendering from "./ComponentRendering";
import MountLifeCycle from "./life_cycle/MountLifeCycle";
import UpdateLifeCycle from "./life_cycle/UpdateLifeCycle";
import UnmountLifeCycle from "./life_cycle/UnmountLifeCycle";
import { Provider } from "./ContextApi/context";

//=========== Numbers =============//
// const numbers = [5,4,3,2,1];
// ReactDOM.render(
//   <React.StrictMode>
//     <App numbers={numbers} age="20"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//======= Condition && =============//
// ReactDOM.render(
//   <Example />,
//   document.getElementById("root")
// );

//================ Handling Events =================//
// ReactDOM.render(
//   <EventHandling />,
//   document.getElementById("root")
// );

//============ Function Binding ================//
// ReactDOM.render(
//   <FuncBind />,
//   document.getElementById("root")
// );

//============ Conditional Rendering ===============//
// ReactDOM.render(
//   <ConditionalRendering />,
//   document.getElementById("root")
// );

//============= Component Rendering Prevention =============//
// ReactDOM.render(
//   <ComponentRendering />,
//   document.getElementById("root")
// );

//==================== Life Cycle =====================//
//Mounting
// ReactDOM.render(
//   <MountLifeCycle favcol="blue"/>,
//   document.getElementById("root")
// );

//Updating
// ReactDOM.render(
//   <UpdateLifeCycle favcol="blue"/>,
//   document.getElementById("root")
// );

//Unmounting
// ReactDOM.render(
//   <UnmountLifeCycle/>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider value={{ name: "Abhi", id: 190 }}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
