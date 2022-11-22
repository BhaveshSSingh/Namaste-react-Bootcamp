import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Helloe World");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);
console.log(ReactDOM);
console.log(root);
