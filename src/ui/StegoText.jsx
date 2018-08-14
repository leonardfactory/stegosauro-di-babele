import React from "react";
import { StegoEmoji } from "./StegoEmoji";
import processString from "react-process-string";

export class StegoText extends React.Component {
  render() {
    return processString([
      {
        regex: /(🦕|🦖)/gu,
        fn: (key, result) => <StegoEmoji code={result[1]} />
      }
    ])(this.props.text);
  }
}
