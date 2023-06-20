import React from "react";
import star from "../Images/Star 1.png";
// import CardData from "./CardData";

export default function Card(props) {
  let badgeText;
  if (props.openSpot === 0) {
    badgeText = "Sold Out";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="relative p-8 grid gap-1">
      <div className="absolute bg-white m-10 rounded px-2">{badgeText}</div>
      <img
        className="max-w-xs rounded-2xl"
        src={props.coverImg}
        alt="card-pic"
      />
      <div className="flex gap-1">
        <img src={star} alt="star" />
        <p>{props.rating}</p>
        <p>({props.reviewCount})</p>
        <p> . {props.location}</p>
      </div>
      <p>{props.description}</p>
      <p>
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}
