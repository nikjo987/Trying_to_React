import React, { Component } from "react";
import "./styles.css";
import Component1 from "./Component1";

export default class App extends Component {
  state = {
    count: 10,
    array: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  };
  render() {
    return (
      <div className="App">
        <br />
        <h1>Hello</h1>
        {/* {this.state.array.map(compo => (
          <Component1 key={compo.id} />
        ))} */}
        <Component1 />
        <Component1 />
      </div>
    );
  }
}
