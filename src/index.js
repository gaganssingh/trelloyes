import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Store from "./Store";

ReactDOM.render(<App store={Store} />, document.getElementById("root"));
