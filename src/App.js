import './App.css';
import color from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [randomColor, setRandomColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  return (
    <div className="App">
      {/* 2. Show the color on the screen */}
      <h1> Random Color Generator </h1>
      <div style={{ backgroundColor: randomColor }}>
        color: {randomColor}
        <button
          className="colorButton"
          onClick={() => {
            setRandomColor(color({ hue: hue, luminosity: luminosity }));
          }}
        >
          Generate
        </button>
        <br />
        <input
          //value={hue}
          placeholder="type color"
          onChange={(event) => {
            setHue(event.currentTarget.value);
          }}
        />
        <br />
        <input
          //value={luminosity}
          placeholder="type dark or light"
          onChange={(event) => {
            setLuminosity(event.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
}
