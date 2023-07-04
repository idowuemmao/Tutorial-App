import React from "react";
import star1 from "../Images/star1.png";
import star2 from "../Images/star2.png";

export default function Star(props) {
  const starIcon = props.isfilled ? star1 : star2;
  
  return <img className="w-5" src={starIcon} onClick={props.handleClick} alt="star" />;
}
