import React from "react";
import { Consumer } from "./context";

const WelcomePage = () => {
  return (
    <div>
      Welcome User:
      <Consumer>
        {(value) => (
          <h2>
            Name:{value.name} id:{value.id}
          </h2>
        )}
      </Consumer>
    </div>
  );
};

export default WelcomePage;
