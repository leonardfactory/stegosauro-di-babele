import React from "react";
import rex from "./rex.png";
import stego from "./stego.png";
import "./StegoEmoji.css";

const EmojiImages = {
  "🦕": stego,
  "🦖": rex
};

export function StegoEmoji(props) {
  return <img src={EmojiImages[props.code]} className="StegoEmoji" />;
}
