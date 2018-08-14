import React from "react";
import {
  translateStringToStego,
  translateStegoToString
} from "../translate/StegoTranslate";
import "./StegoContainer.css";
import { StegoText } from "./StegoText";

export class StegoContainer extends React.Component {
  state = {
    text: "Ciao, come stai? 😛"
  };

  handleChangeText = e => {
    this.setState({
      text: e.currentTarget.value
    });
  };

  render() {
    const stego = translateStringToStego(this.state.text);
    return (
      <div className="StegoContainer">
        <div className="intro">
          <div className="intro-title animated tada delay-3s">
            <StegoText text="🦖🦕!" />
          </div>
        </div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChangeText}
        />
        <p className="help animated wobble delay-3s">(Modificami!)</p>
        <p className="description">
          Credo che in stegosaurese suoni più o meno così...
        </p>
        <p className="data">
          <StegoText text={stego} />
        </p>
        <p className="description">
          Anche se potrebbe voler dire, dato che lo stegosaurese è contestuale,
          una qualsiasi delle seguenti frasi ad esempio:
        </p>
        <p className="data">
          <StegoText text={translateStegoToString(stego)} /> <br />{" "}
          <StegoText text={translateStegoToString(stego)} /> <br />{" "}
          <StegoText text={translateStegoToString(stego)} />
        </p>
      </div>
    );
  }
}
