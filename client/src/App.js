import React from "react";

import "./index.css";
import FetchData from "./components/FetchData";

function App() {
  return (
      <div className="App">
        <p>Players</p>
        <FetchData />
      </div>
  );
}

export default App;