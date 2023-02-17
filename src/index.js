// React
import React from "react";
import { createRoot } from "react-dom/client";
// App
import Main from "./Main";

const root = createRoot(document.getElementById("root"));

const MainApp = () => {
  return (
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
};

root.render(MainApp);
