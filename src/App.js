import "./App.css";
import WelcomePage from "./ContextApi/WelcomePage";

function App(props) {
  //const numbers = [1,2,3,4,5];
  // const list = props.numbers;
  // const age = props.age;

  // const updatedList = list.map((listItems) => {
  //   return (<li key={listItems.toString()}>
  //     <h1> {listItems * 2} </h1>
  //     </li>);
  // });
  // return <ul>{updatedList}</ul>;

  return (
    <div className="App">
      <WelcomePage />
    </div>
  );
}

export default App;
