import React, { useState } from "react";

const ColorChangingButton = (props) => {
  const [textColor, setTextColor] = useState("black");

  const handleClick = () => {
    // You can customize the logic here to change the text color as per your requirement
    const newColor = textColor === "black" ? "blue" : "black";
    setTextColor(newColor);
  };

  return (
    <button onClick={handleClick} style={{ color: textColor }}>
      help
    </button>
  );
};

export default ColorChangingButton;
