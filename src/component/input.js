import React from "react";
import { useState } from "react";

export default function Input(props) {
  const [value, setValue] = useState(props.value);
  return (
    <div>
      <label>
        <span style={{ marginRight: "8px" }}>{props.label}</span>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            props.handleChange?.(e.target.value);
          }}
          style={{ padding: "8px" }}
        />
      </label>
    </div>
  );
}
