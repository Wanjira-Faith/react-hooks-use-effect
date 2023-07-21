import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText]= useState("");

  useEffect(() => {
    console.log("useEffect called")
    document.title = text;
  }, [text]);

  useEffect(() => {
    console.log("timeout");
    setTimeout(() => setCount(0), 5000);
    }, []);
  
  console.log("Component rendering");

  return (
  <>
    <button onClick={() => setCount((count) => count +1 )}>I've been clicked {count} times</button>
    <input type="text" placeholder="Type away..." value={text} onChange={(e) => setText(e.target.value)} />
  </>
  );
}

export default App;

    //useEffect Dependencies Cheatsheet
//1.useEffect(() => {}): No dependencies array
//     Run the side effect every time our component renders (whenever state or props change)
// 2.useEffect(() => {}, []): Empty dependencies array
//     Run the side effect only the first time our component renders
//3.useEffect(() => {}, [variable1, variable2]): Dependencies array with elements in it
//     Run the side effect any time the variable(s) change