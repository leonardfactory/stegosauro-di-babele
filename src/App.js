import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  translateStringToStego,
  translateStegoToString
} from "./translate/StegoTranslate";
import { StegoContainer } from "./ui/StegoContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <StegoContainer />
        </p>
      </div>
    );
  }
}

export default App;
