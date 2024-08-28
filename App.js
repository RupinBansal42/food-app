import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, [("h2", {}, "New h2 tag"), ("h2", {}, "New H2 Buy Rupi tag")]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
