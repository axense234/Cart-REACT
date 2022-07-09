import React from "react";
import ReactDOM from "react-dom";
// App
import { App } from "./App";

const MainApp = () => {
  return (
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  );
};

ReactDOM.render(<MainApp></MainApp>, document.getElementById("root"));
