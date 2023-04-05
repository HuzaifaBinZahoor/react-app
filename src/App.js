import "./App.css";
import { useState, useEffect, useRef } from "react";

const [firstCity, secondCity, thirdCity] = ["A", "B", "C"];

console.log("Cities are", firstCity);
console.log("Cities are", secondCity);
console.log("Cities are", thirdCity);

function App({ firstCity }) {
  const [emotion, setEmotion] = useState("Sad");
  const [checked, setChecked] = useState(false);

  const [titleUseState, setTitleUseState] = useState("");
  const [colorUseState, setColorUseState] = useState("#000000");

  const inputText = useRef();
  const colorValue = useRef();

  console.log("Input text", inputText);
  console.log("Color Value", colorValue);

  useEffect(() => {
    console.log(`UseEffect Called with emotion ${emotion}`);
  }, [emotion]);

  const submit = (e) => {
    e.preventDefault();
    const input = inputText.current.value;
    const color = colorValue.current.value;
    alert(`${input}, ${color}`);
  };

  const submitAgain = (e) => {
    e.preventDefault();
    alert(`${titleUseState}, ${colorUseState}`);
  };

  return (
    <div className="App">
      <p>First City is {emotion}</p>
      <button onClick={() => setEmotion("Excited")}>Emotion 2</button>
      <button onClick={() => setEmotion("Anxious")}>Emotion 3</button>
      <button onClick={() => setEmotion("Confident")}>Emotion 4</button>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      ></input>
      <label>{checked ? "not checked" : "checked"}</label>

      <form onSubmit={submit}>
        <input type="text" ref={inputText} placeholder="name of color"></input>
        <input type="color" ref={colorValue}></input>
        <button>submit</button>
      </form>

      {/* this below piece of code is for useState hook instead of using useRef hook  */}

      <form onSubmit={submitAgain}>
        <input
          type="text"
          placeholder="name of color"
          value={titleUseState}
          onChange={(event) => setTitleUseState(event.target.value)}
        ></input>
        <input
          type="color"
          value={colorUseState}
          onChange={(event) => setColorUseState(event.target.value)}
        ></input>
        <button>submit Again</button>
        <button>submit Again 2</button>
      </form>
    </div>
  );
}

export default App;
