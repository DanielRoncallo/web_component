import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Input from "./component/input";
import reactToWebComponent from "react-to-webcomponent";
import ColorChangingButton from "./component/button";

const wcInput = reactToWebComponent(Input, React, ReactDOM, {
  dashStyleAttributes: true,
  props: {
    label: String,
    value: String,
    handleChange: Function,
  },
});
customElements.define("r2wc-input", wcInput);

const btnColor = reactToWebComponent(ColorChangingButton, React, ReactDOM, {
  dashStyleAttributes: true,
  props: {},
});
customElements.define("r2wc-btn", btnColor);

reportWebVitals();
