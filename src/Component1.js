import React, { Component } from "react";
import Component2 from "./Component2";

export default class Component1 extends Component2 {
  render() {
    return (
      <div className="Comp1">
        <h1>Hello</h1>
        <Component2 />
        <Component2 />
      </div>
    );
  }
}
