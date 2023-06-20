import React from "react";
import logo from "../Images/logo192.png";

function NavBar() {
  return (
    <nav className="flex items-center p-4 bg-black w-100% gap-2">
      <img className="w-8 " src={logo} alt="react-logo" />
      <h2 className="text-lg text-[#6fdefb] font-semibold mr-auto ">ReactFacts</h2>
      <h3 className="text-white text-sm">React Course - Project 1</h3>
    </nav>
  );
}
export default NavBar;
