import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const { color, fontSize, children } = props;
  const contentStyle = {
    color: color,
    fontSize: fontSize
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
