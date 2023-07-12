import React from "react";
export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);
  return <h1> Window Width: {windowWidth}</h1>;
}
