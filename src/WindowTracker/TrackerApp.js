import React from "react";
import WindowTracker from "./WindowTracker";

export default function TrackerApp() {
  const [show, setShow] = React.useState(true);
  function toogle() {
    setShow((prevShow) => !prevShow);
  }
  return (
    <div>
      <button onClick={toogle} className="bg-orange-600 p-2 shadow-lg">
        Toogle Window Tracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}
