import React from "react";
import Display from "./Display";
import "./App.css";
import ButtonPanel from "./ButtonPanel";

const App = () => {
  return (
    <div className="app">
      <Display />
      <ButtonPanel />
    </div>
  );
};

export default App;
