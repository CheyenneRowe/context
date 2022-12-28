import ReactDOM from "react-dom";
import React, { createContext, useState, useContext } from "react";

import { useContextHook } from "./index";
import Child from "./child";

function Baba() {
  console.log("00", useContextHook());
  const { n } = useContextHook();
  return (
    <div>
      我是爸爸 n: {n} <Child />
    </div>
  );
}
export default Baba;
