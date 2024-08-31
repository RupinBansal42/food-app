import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import './../index.css';


const App = () => {
  return (
    <div className="app">
      <AppLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
