/* FUNCTION BASED COMPONENT */
import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;

/* CLASS BASED COMPONENT */
/* import React, { Component } from "react";
import loading from "./loading.gif";

class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="loading" />
      </div>
    );
  }
} 

export default Spinner;*/
