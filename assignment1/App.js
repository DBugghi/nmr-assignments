import React from "react";

import ReactDOM from "react-dom";

const header = React.createElement(
  "h1",
  { class: "title" },
  React.createElement(
    "h2",
    { class: "title" },
    React.createElement("h3", { class: "title" }, "XYZ")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
