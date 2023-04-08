import "./App.css";
import { useState, useEffect, useRef } from "react";

const [firstCity, secondCity, thirdCity] = ["A", "B", "C"];

console.log("Cities are", firstCity);
console.log("Cities are", secondCity);
console.log("Cities are", thirdCity);

/* For custome hook */
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    /* This will return what ever I want */
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () =>
      setValue(
        initialValue
      ) /* this will be our cleanup function, we'll set the value to whatever that initile value is */,
  ];
}

/* 
Here is the best way, for me, to add code inside word:

Go to Insert tab, Text section, click Object button (it's on the right)
Choose OpenDocument Text which will open a new embedded word document
Copy and paste your code from Visual Studio / Eclipse inside this embedded word page
Save and close

*/

function App({ firstCity }) {
  const [emotion, setEmotion] = useState("Sad");
  const [checked, setChecked] = useState(false);

  /* specific const for customeHook */
  const [titleProps, setTitleProps] = useInput("");
  const [colorProps, setColorProps] = useInput("#000000");

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

  const submitCustomHook = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
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
      </form>

      {/* custom hook for below */}
      <form onSubmit={submitCustomHook}>
        <input type="text" placeholder="name of color" {...titleProps}></input>
        <input type="color" {...colorProps}></input>
        <button>submit Again custom hook</button>
      </form>
    </div>
  );
}

export default App;
