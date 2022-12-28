import React, { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom";

import Baba from "./baba";
import "./styles.css";

export const C = createContext(null);
export const useContextHook = () => useContext(C);

function App() {
  console.log("App 执行了ss");
  const [n, setN] = useState(0);
  return (
    <C.Provider value={{ n, setN }}>
      <div className="App">
        <Baba />
      </div>
    </C.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// export { C, useContextHook };
