
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
     setCounter((count) => count + 1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Button clicked {counter} times</p>
    <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
