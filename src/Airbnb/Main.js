import React from "react";
import airbnbAdvert from "../Images/Group 77.png";

export default function Main() {
  return (
    <div>
      <img className="w-full p-16" src={airbnbAdvert} alt="advert" />
      <h1 className="font-bold text-8xl pl-8">Online Experiences</h1>
      <p className="p-8 text-5xl w-10/12">
        Join unique interactive activities led by one-of-a-kind host-all without
        leaving home.
      </p>
    </div>
  );
}
