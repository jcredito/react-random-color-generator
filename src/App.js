import './App.css';
import { useState } from 'react';

export default function App() {
  // 1. Create a state variable and setter, with
  // a default value of a random emoji
  const randomColor = '#' + Math.random().toString(16).substr(-6);
  const [color, setColor] = useState('');

  // const [hasError, setHasError] = useState(false);

  return (
    <div className="App">
      {/* 2. Show the color on the screen */}
      <h1> Random Color Generator </h1>
      <div
        style={{
          backgroundColor: randomColor,
        }}
      >
        <>
          <button
            className="colorButton"
            onClick={() =>
              // 3. Generate and set a new value for the color
              //example const newEmoji = nodeEmoji.random().emoji;
              //example setEmoji(newEmoji);
              setColor(randomColor)
            }
          >
            Generate
          </button>
        </>
      </div>
    </div>
  );
}
//example with input button

{
  /* Generate
<br />
<input
  value={emojiName}
  onChange={(event) => {
  setEmojiName(event.currentTarget.value);
    if (nodeEmoji.hasEmoji(event.currentTarget.value)) {
      // setHasError(false);
      setEmoji(nodeEmoji.find(event.currentTarget.value).emoji);
      // } else {
      //   setHasError(true);
    }
  }}
/>{' '}
{hasError && 'x'}
</div>
</div>
);/*
/*import { useState } from 'react';

const useGenerateRandomColor = () => {
  const [color, setColor] = useState('');
  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return { color, generateColor };
};

export default useGenerateRandomColor;*/
}
