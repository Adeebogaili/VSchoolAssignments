import React, { useState } from "react";

const App = () => {
  const [color1, setColor1] = useState("#ffaaaa");
  const [color2, setColor2] = useState("#734c8f");
  const [degree, setDegree] = useState(0);

  const gradient = `linear-gradient(${degree}deg, ${color1}, ${color2})`;
  const background = `background: linear-gradient(${degree}deg, ${color1} , ${color2});`
  const mozBackground = `-moz-background: linear-gradient(${degree}deg, ${color1} , ${color2});`
  const webkit = `-webkit: linear-gradient(${degree}deg, ${color1} , ${color2})`
  
  return (
    <div className="container" style={{background: gradient}}>
      <div className="main-wrapper">
        <div className="left-side">
          <div className="display" style={{ background: gradient, height: "200px" }} />
          <div className="rgbaValues">
            {background}
            <br />
            {mozBackground}
            <br />
            {webkit}
            </div>
        </div>
        <div className="right-side">
          <h2 className="options">Options</h2>
          <div className="color-wrapper">
            <p>Color 1</p>
            <p>{color1}</p>
            <input
              id="color1"
              className="colors"
              type="color"
              name="color1"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
            />
          </div>
          <div className="color-wrapper">
            <p>Color 2</p>
            <p>{color2}</p>
            <input
              className="colors"
              type="color"
              name="color2"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
            />
          </div>
          <label>
            Degree:  
            <input className="degree" type="number" min="0" max="360" value={degree} onChange={(e) => setDegree(e.target.value)} />
          </label>
        </div>
      </div>
    </div>
  );
}
export default App
