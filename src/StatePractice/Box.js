import React from "react";
import BoxData from "./BoxData";


export default function Box() {
  const [boxes, setBoxes] = React.useState(BoxData);
  const boxElement = boxes.map((box) => (
    <div key={box.id} className="w-auto h-auto p-8 bg-fuchsia-800 text-white ">
      box
    </div>
  ));
  return <div className="grid grid-cols-5 gap-4">{boxElement}</div>;
}
