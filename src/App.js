import React from "react";
import "./style.scss";
import { useState } from "react";
import Button from "./button";

export default function App() {
  const [color, setColor] = useState([236, 120, 255]);
  let formattedColor = `rgb(${color.join()})`;
  const applyColor = () => {
    document.body.style.backgroundColor = formattedColor;
  };
  applyColor();

  const chooseColor = () => {
    const random = [];

    for (let i = 0; i < 3; i++) {
      setColor(random);
      random.push(Math.floor(Math.random() * 256));
    }
  };

  let isLight = color.reduce((a, b) => a + b) < 127 * 3;

  return (
    <div className="App">
      <div className="Instructions">
        <div className="block">
          <h1>Random Color</h1>
        </div>

        <div id="randomcolor">
          <h2 className={isLight ? "white" : "black"}>
            Your color is {formattedColor}
          </h2>
          <Button shuffleColor={chooseColor} light={isLight} />
        </div>
      </div>
    </div>
  );
}
