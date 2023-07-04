import React from "react";
import MemeNavBar from "./MemeNavBar";
import MemeInput from "./MemeInput";
import StatePractice from "../StatePractice/StatePractice";
const MemeGen = () => {
  return (
    <div className="w-3/4 m-12 shadow-xl">
      <MemeNavBar />
      <StatePractice />
      <MemeInput />
    </div>
  );
};

export default MemeGen;
