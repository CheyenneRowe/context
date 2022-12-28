import ReactDOM from "react-dom";
import React, { createContext, useState, useContext } from "react";
import { useContextHook } from "./index";

export default function Child() {
  const { n, setN } = useContextHook();
  const onClick = () => {
    setN((i) => i + 1);
  };
  return (
    <div>
      我是儿子 我得到的 n: {n}
      <button onClick={onClick}>+1</button>
    </div>
  );
}
