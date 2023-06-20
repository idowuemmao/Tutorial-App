import React from "react";
import airbnblogo from "../Images/Vector.png";

export default function Navbar() {
  return (
    <div className="shadow-lg w-100% p-4">
      <img src={airbnblogo} alt="airbnb-logo" />
    </div>
  );
}
