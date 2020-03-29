import React, { Component } from "react";
import Component3 from "./Component3";

export default class Component2 extends Component3 {
  render() {
    return (
      <div className="Comp2">
        <br />
        <Component3 />
        <Component3 />
      </div>
    );
  }
}
