import React from "react";
import ReactDOM from "react-dom/client";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

const App = () => {
  return (
    <div>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
};

root.render(<App />);
