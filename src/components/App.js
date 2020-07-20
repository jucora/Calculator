import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "../css/style.scss";

const App = () => {
  return (
    <div className="app">
      <Display />
      <ButtonPanel />
    </div>
  );
};

export default App;
