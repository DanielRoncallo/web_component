import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Input from "./component/input";
import reactToWebComponent from "react-to-webcomponent";
/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
const wcInput = reactToWebComponent(Input, React, ReactDOM, {
  dashStyleAttributes: true,
  props: {
    label: String,
    value: String,
    handleChange: Function,
  },
});
customElements.define("r2wc-input", wcInput);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
