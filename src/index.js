// React
import React from "react";
import ReactDOM from "react-dom";
// App
import Main from "./Main";

const MainApp = () => {
  return (
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
};

ReactDOM.render(<MainApp />, document.getElementById("root"));
