/**
 * 1.
 * To `./src/components/TablaComponent.js`
 */
import React, { Component } from "react";
import MainComponent from "./components/MainComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <MainComponent />;
}
