import React from "react";

export default function Box(props) {
  const myStyles = {
    backgroundColor: props.on ? "fuchsia" : "black",
    color: props.on ? "white" : "red",
  };

  return (
    <div
      style={myStyles}
      onClick={() => props.onClick(props.id)}
      className="bg-red-500 cursor-pointer p-4"
    >
      BOX
    </div>
  );
}
