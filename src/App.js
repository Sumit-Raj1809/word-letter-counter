import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const letterCount = text.replace(/\s+/g, "").length;

  return (
    <div className="App">
      <h1>Word and Letter Counter</h1>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="counter-box">
        <p><strong>Words:</strong> {wordCount}</p>
        <p><strong>Letters:</strong> {letterCount}</p>
        <SpeedInsights />
      </div>
    </div>
  );
}

export default App;
